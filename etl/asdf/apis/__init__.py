from flask_restx import Api
from .product import api as ns1
from .product_demand import api as ns2



api = Api(
    title='My Title',
    version='1.0',
    description='A description',
    # All API metadatas
)

api.add_namespace(ns1, path='/product')
api.add_namespace(ns2, path='/product/demand')

# api.add_namespace(ns2, path='/prefix/of/ns2')
# # ...
# api.add_namespace(nsX, path='/prefix/of/nsX')