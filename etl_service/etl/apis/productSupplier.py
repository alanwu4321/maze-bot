from etl.utils import api_utils as utils, db, history
from flask_restx import Namespace, Resource, fields, reqparse
from flask_cors import cross_origin
import requests
from urllib.parse import urlencode
import urllib.parse
import os
import collections
print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(
    __file__, __name__, str(__package__)))

api = Namespace('ProductSupplier', description='ProductSupplier related CRUD operations')
sign = lambda a: 1 if a>0 else -1 if a<0 else 0


@api.route('/')
# @cross_origin(origin='*')
class ProductSupplier(Resource):
    get_parser = reqparse.RequestParser()
    # get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    # get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('s_id', type=int, help='supplier id', location='args')
    get_parser.add_argument('p_id', type=int, help='supplier id', location='args')
    get_parser.add_argument('date', type=str, help='supplier name', location='args')
    get_parser.add_argument('inventory', type=float, help='supplier name', location='args')
    get_parser.add_argument('price', type=float, help='supplier name', location='args')
    get_parser.add_argument('updated_by', type=float, help='supplier name', location='args')

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('s_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('p_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('date', type=str, help='supplier name', location='form')
    post_parser.add_argument('inventory', type=float, help='supplier name', location='form')
    post_parser.add_argument('price', type=float, help='supplier name', location='form')
    post_parser.add_argument('updated_by', type=float, help='supplier name', location='form')

    @api.doc('get ProductSupplier')
    @api.doc(parser=get_parser)
    def get(self):
        args = ProductSupplier.get_parser.parse_args()
        rows = db.query(db.PS).select().join(db.S).on("s_id").join(db.P).on("p_id")
        cols, vals = utils.marshal(args)
        rows.eql(*vals).where(*cols).order_by("updated_at","desc")
        ps = utils.jsonify(rows.eval())
        print(ps)
        res = collections.defaultdict(dict)
        for product in ps:
            #dump default supplier data to root object
            if product['s_name'] == os.getenv('DEFAULT_SUPPLIER'):
                for key, val in product.items():
                    res[product['p_id']][key] = val
            if res[product['p_id']].get('suppliers'):
                res[product['p_id']]['suppliers'].append(product)
            else:
                res[product['p_id']]['suppliers'] = [product]
        for p_id, datas in res.items():
            min_s = max_s = datas['suppliers'][0]['s_name']
            min_p = 100000
            max_p = datas['suppliers'][0]['price']
            default_p = 0
            agg_p = 0
            for sup in datas['suppliers']:
                if sup['s_name'] == os.getenv('DEFAULT_SUPPLIER'): 
                    default_p = sup['price']
                elif min_p >= sup['price']:
                    min_p,min_s =  sup['price'], sup['s_name']
                elif max_p <= sup['price']:
                    max_p,max_s =  sup['price'], sup['s_name']
                agg_p += sup['price']
            if min_p == 100000:
                min_p = sup['price']
            res[p_id]['min_p']= min_p
            res[p_id]['max_p'] = max_p
            res[p_id]['min_s'] = min_s
            res[p_id]['max_s'] = max_s
            res[p_id]['default_p'] = default_p
            res[p_id]['diff_from_min'] = round(default_p - min_p,2)
            res[p_id]['diff_from_max'] = round(max_p - default_p ,2)
            res[p_id]['diff_trend'] = sign(default_p - min_p)
            res[p_id]['agg_p'] = round(agg_p / len(datas['suppliers']),2)
        return res
    
    @api.doc('add ProductSupplier')
    @api.doc(parser=post_parser)
    def post(self):
        args = ProductSupplier.post_parser.parse_args()
        rows = db.query(db.PS)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())


@api.route('/history')
# @cross_origin(origin='*')
class ProductSupplierInventory(Resource):
    post_parser = reqparse.RequestParser()
    post_parser.add_argument('s_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('p_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('date', type=str, help='supplier name', location='form')
    post_parser.add_argument('inventory', type=float, help='supplier name', location='form')
    post_parser.add_argument('price', type=float, help='supplier name', location='form')
    post_parser.add_argument('updated_by', type=float, help='supplier name', location='form')

    @api.doc('get ProductSupplier inventory by product and supplier')
    @api.doc(parser=post_parser)
    def get(self):
        res = history.fetchHistory("bb", 14, 1)
        return utils.jsonify(res)


@api.route('/update')
# @cross_origin(origin='*')
class ProductSupplierUpdate(Resource):
    post_parser = reqparse.RequestParser()
    # post_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    # post_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    post_parser.add_argument('s_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('p_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('s_name', type=str, help='supplier id', location='form')
    post_parser.add_argument('update_using', type=str, help='supplier id', location='form')

    @api.doc('get ProductSupplier update by product and supplier')
    @api.doc(parser=post_parser)
    def post(self):
        args = ProductSupplierUpdate.post_parser.parse_args()
        mapping = db.query(db.PSM).select(args['update_using']).eql(args['p_id'], args['s_id']).where('p_id', 's_id').eval()
        uuid = mapping[0][args['update_using']]
        query = {'keywords': 'product:'+uuid, 'stores': args['s_name']}
        response = requests.get(os.getenv('JS_API') + '/kafka?' + urlencode(query))
        return response.json()
