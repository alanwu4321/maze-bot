from etl.utils import api_utils as utils, db
from flask_restx import Namespace, Resource, fields, reqparse
from datetime import date


api = Namespace('ProductDemand', description='Product related operations')

@api.route('/')
class ProductDemand(Resource):
    get_parser = reqparse.RequestParser()
    get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('p_id', type=int, help='product id', location='args')
    get_parser.add_argument('date', type=str, help='date of the demand', location='args')
    get_parser.add_argument('demand', type=float, help='demand of the product on that date', location='args')

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('p_id', type=int, help='product id', location='form')
    post_parser.add_argument('date', type=str, help='date of the demand', location='form')
    post_parser.add_argument('demand', type=float, help='demand of the product on that date', location='form')
    
   
    @api.doc('get products demand')
    @api.doc(parser=get_parser)
    def get(self):
        args = ProductDemand.get_parser.parse_args()
        rows = db.query(db.PD).select()
        col, _ord = args.pop('col'), args.pop('ord')
        cols, vals = utils.marshal(args)
        rows.join(db.P).on("p_id").eql(*vals).where(*cols)
        rows.order_by(col, _ord)
        return utils.jsonify(rows.eval())
    
    @api.doc('add products demand')
    @api.doc(parser=post_parser)
    def post(self):
        args = ProductDemand.post_parser.parse_args()
        rows = db.query(db.PD)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())
