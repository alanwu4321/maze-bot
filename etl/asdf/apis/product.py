from asdf.utils import api_utils as utils, db
from flask_restx import Namespace, Resource, fields, reqparse
print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(
    __file__, __name__, str(__package__)))


api = Namespace('Product', description='Product related operations')

@api.route('/')
class Product(Resource):
    get_parser = reqparse.RequestParser()
    get_parser.add_argument('sort_by', type=str, help='sort by column', location='args', dest='col')
    get_parser.add_argument('order', type=str, help='sort order', location='args', dest='ord')
    get_parser.add_argument('p_id', type=int, help='product id', location='args')
    get_parser.add_argument('p_name', type=str, help='product name', location='args')
    get_parser.add_argument('model_no', type=str, help='product model number', location='args')
    get_parser.add_argument('brand', type=str, help='product brand', location='args')
    get_parser.add_argument('category', type=str, help='product category', location='args')
    get_parser.add_argument('created_by', type=int, help='created by', location='args')

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('p_id', type=int, help='product id', location='form')
    post_parser.add_argument('p_name', type=str, help='product name', location='form')
    post_parser.add_argument('model_no', type=str, help='product model number', location='form')
    post_parser.add_argument('brand', type=str, help='product brand', location='form')
    post_parser.add_argument('category', type=str, help='product category', location='form')
    post_parser.add_argument('created_by', type=int, help='created by', location='form')
    
   
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
        args = Product.post_parser.parse_args()
        rows = db.query(db.P)
        cols, vals = utils.marshal(args)
        rows.write(*vals).into(*cols)
        return utils.jsonify(rows.eval())

