from asdf.utils import api_utils as utils, db
from flask_restx import Namespace, Resource, fields, reqparse
from flask_cors import cross_origin
import requests
from urllib.parse import urlencode
import urllib.parse
import os
print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(
    __file__, __name__, str(__package__)))

api = Namespace('Supplier', description='Supplier related CRUD operations')


@api.route('/')
# @cross_origin(origin='*')
class Supplier(Resource):
    get_parser = reqparse.RequestParser()
    # get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    # get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('s_id', type=int, help='supplier id', location='args')
    get_parser.add_argument('s_name', type=str, help='supplier name', location='args')
    get_parser.add_argument('base_url', type=str, help='supplier model number', location='args')
    # get_parser.add_argument('created_by', type=str, help='supplier brand', location='args')
   
    post_parser = reqparse.RequestParser()
    post_parser.add_argument('s_id', type=int, help='supplier id', location='form')
    post_parser.add_argument('s_name', type=str, help='supplier name', location='form')
    post_parser.add_argument('base_url', type=str, help='supplier model number', location='form')
    post_parser.add_argument('updated_by', type=int, help='created by', location='form')
    
   
    @api.doc('get supplier')
    @api.doc(parser=get_parser)
    def get(self):
        args = Supplier.get_parser.parse_args()
        rows = db.query(db.S).select()
        cols, vals = utils.marshal(args)
        rows.eql(*vals).where(*cols)
        suppliers = utils.jsonify(rows.eval())
        for ind,sup in enumerate(suppliers):
            if sup['s_id'] == -1:
                del suppliers[ind]
                break
        return suppliers
    
    @api.doc('add products')
    @api.doc(parser=post_parser)
    def post(self):
        args = Supplier.post_parser.parse_args()
        rows = db.query(db.P)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())

