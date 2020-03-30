from etl.utils import api_utils as utils, db
# from etl.utils.api_utils import redisUtil
from flask_restx import Namespace, Resource, fields, reqparse
from flask_cors import cross_origin
import requests
from flask import request
from datetime import timedelta
import json
from urllib.parse import urlencode
import urllib.parse
import os
print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(
    __file__, __name__, str(__package__)))



api = Namespace('Product', description='Product related CRUD operations')
bestbuy_map = {
    'p_name': 'name',
    'category': 'categoryPath',
    'price': 'salePrice',
    'model_no': 'modelNumber',
    'brand': 'manufacturer',
    # 'url': 'productUrl',
    'img':  'image',
    'uuid': 'sku',
}

@api.route('/online')
# @cross_origin(origin='*')
class ProductOnline(Resource):
    pool = utils.redisPool()

    get_parser = reqparse.RequestParser()
    get_parser.add_argument('kw', type=str, help='keyword', location='args')
    get_parser.add_argument('category', type=str, help='category', location='args', dest='cat')
    get_parser.add_argument('supplier', type=str, help='supplier', location='args', dest='sup')
    get_parser.add_argument('update', type=str, help='update cache or not', location='args')

    def redis_cache(self, args):
        redis = ProductOnline.pool.redis()
        key = args['sup'] + ":" + json.dumps(args)
        if redis.exists(key):
            print("CACHE HIT!!")
            cache = redis.get(key)
            return json.loads(cache)
        handler = self.get_handlers().get(args["sup"].lower())
        res = handler(args["sup"].lower(), args)
        redis.setex(
            key,
            timedelta(minutes=100000005),
            value=json.dumps(res)
        )
        return res

    @api.doc('search products online to add')
    @api.doc(parser=get_parser)
    def get(self):
        args = ProductOnline.get_parser.parse_args()
        if not args.get("sup"): args["sup"] = os.getenv('DEFAULT_SUPPLIER')
        return self.redis_cache(args)

    def bestbuy_handler(self, store, args):
        if not args.get('kw'): return []
        response = requests.get("https://api.bestbuy.com/v1/products((search=%s)&categoryPath.id=%s)?apiKey=tda21Z9pyCFomCJM211gkCrY&sort=salePrice.dsc&show=customerReviewAverage,manufacturer,name,onlineAvailability,onlineAvailabilityText,customerReviewCount,sku,name,salePrice,categoryPath.name,image,modelNumber,bestSellingRank&pageSize=20&format=json" % (urllib.parse.quote(args['kw']), args['cat']))
        res = response.json()
        for product in res['products']:
            for key, third_p_key in bestbuy_map.items():
                product[key] = product[third_p_key]
            product['category'] =  product['category'][-2]['name'] if len(product['category']) > 1 else product['category'][-1]['name']
        return res['products']

    def scraper_handler(self, store, args):
        if not args.get('kw'): return []
        if not args.get('update'): args['update'] = "false"
        query = {'keywords': args['kw'], 'stores': store, 'update': args['update']}
        response = requests.get(os.getenv('JS_API') + '/api?' + urlencode(query))
        return response.json()

    def get_handlers(self):
        return {
            "bestbuy": self.bestbuy_handler,
            "amazon": self.scraper_handler,
            "staples": self.scraper_handler,
            "walmart": self.scraper_handler,
            "source": self.scraper_handler,
        }


@api.route('/')
# @cross_origin(origin='*')
class Product(Resource):
    get_parser = reqparse.RequestParser()
    get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('p_id', type=int, help='product id', location='args')
    get_parser.add_argument('p_name', type=str, help='product name', location='args')
    get_parser.add_argument('model_no', type=str, help='product model number', location='args')
    get_parser.add_argument('brand', type=str, help='product brand', location='args')
    get_parser.add_argument('img', type=str, help='img url', location='args')
    get_parser.add_argument('category', type=str, help='product category', location='args')
    get_parser.add_argument('updated_by', type=int, help='created by', location='args')
    get_parser.add_argument('keyword', type=str, help='keyword to search', location='args')

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('p_id', type=int, help='product id', location='form')
    post_parser.add_argument('p_name', type=str, help='product name', location='form')
    post_parser.add_argument('model_no', type=str, help='product model number', location='form')
    post_parser.add_argument('brand', type=str, help='product brand', location='form')
    post_parser.add_argument('category', type=str, help='product category', location='form')
    post_parser.add_argument('img', type=str, help='img url', location='form')
    post_parser.add_argument('updated_by', type=int, help='created by', location='form')
    post_parser.add_argument('keyword', type=str, help='keyword to search', location='form')
    


    @api.doc('get products')
    @api.doc(parser=get_parser)
    def get(self):
        args = Product.get_parser.parse_args()
        rows = db.query(db.P).select()
        col, _ord = args.pop('col'), args.pop('ord')
        cols, vals = utils.marshal(args)
        rows.eql(*vals).where(*cols)
        rows.order_by(col, _ord)
        return utils.jsonify(rows.eval())
    
    @api.doc('add products')
    @api.doc(parser=post_parser)
    def post(self):
        print(request.json)
        print(request.form)
        args = Product.post_parser.parse_args()
        print(args)
        rows = db.query(db.P)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())

