from asdf.utils import api_utils as utils, db
from flask_restx import Namespace, Resource, fields, reqparse
from flask_cors import cross_origin
import requests
from urllib.parse import urlencode
import urllib.parse
import os
print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(
    __file__, __name__, str(__package__)))

api = Namespace('ProductSupplierMap', description='ProductSupplierMap related CRUD operations')


@api.route('/')
# @cross_origin(origin='*')
class ProductSupplierMap(Resource):
    get_parser = reqparse.RequestParser()
    # get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    # get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('s_id', type=int, help='supplier id', location='args')
    get_parser.add_argument('p_id', type=int, help='supplier id', location='args')
    get_parser.add_argument('uuid', type=str, help='supplier name', location='args')
    get_parser.add_argument('url', type=str, help='supplier name', location='args')
    get_parser.add_argument('updated_by', type=float, help='supplier name', location='args')

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('s_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('p_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('uuid', type=str, help='supplier name', location='form')
    post_parser.add_argument('url', type=str, help='supplier name', location='form')
    post_parser.add_argument('updated_by', type=float, help='supplier name', location='form')

    @api.doc('get ProductSupplierMap')
    @api.doc(parser=get_parser)
    def get(self):
        args = ProductSupplierMap.get_parser.parse_args()
        rows = db.query(db.PSM).select().join(db.S).on("s_id").join(db.P).on("p_id")
        cols, vals = utils.marshal(args)
        rows.eql(*vals).where(*cols)
        suppliers = utils.jsonify(rows.eval())
        #remove empty, preferrably id
        # for ind,sup in enumerate(suppliers):
        #     for key, val in sup.items():
        #         if val == -1:
        #             del suppliers[ind]
        return suppliers
    
    @api.doc('add ProductSupplierMap')
    @api.doc(parser=post_parser)
    def post(self):
        args = ProductSupplierMap.post_parser.parse_args()
        rows = db.query(db.PSM)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())

