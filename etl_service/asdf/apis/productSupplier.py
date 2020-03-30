from asdf.utils import api_utils as utils, db
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
        rows.eql(*vals).where(*cols)
        ps = utils.jsonify(rows.eval())
        res = collections.defaultdict(dict)
        for product in ps:
            if res[product['p_id']].get('suppliers'):
                res[product['p_id']]['suppliers'].append(product)
            else:
                res[product['p_id']]['suppliers'] = [product]
                for key, val in product.items():
                    res[product['p_id']][key] = val
        for p_id, datas in res.items():
            min_s = max_s = ""
            min_p = datas['suppliers'][0]['price']
            max_p = min_p
            default_p = 0
            agg_p = 0
            for sup in datas['suppliers']:
                if sup['s_name'] == os.getenv('DEFAULT_SUPPLIER'): default_p = sup['price']
                if min_p >= sup['price']:
                    min_p,min_s =  sup['price'], sup['s_name']
                if max_p <= sup['price']:
                    max_p,max_s =  sup['price'], sup['s_name']
                agg_p += sup['price']
            res[p_id]['min_p']= min_p
            res[p_id]['max_p'] = max_p
            res[p_id]['min_s'] = min_s
            res[p_id]['max_s'] = max_s
            res[p_id]['default_p'] = default_p
            res[p_id]['diff_from_min'] = default_p - min_p
            res[p_id]['agg_p'] = agg_p / len(datas['suppliers'])
        return res
    
    @api.doc('add ProductSupplier')
    @api.doc(parser=post_parser)
    def post(self):
        args = ProductSupplier.post_parser.parse_args()
        rows = db.query(db.PS)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())

