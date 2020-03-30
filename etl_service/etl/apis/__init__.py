from flask_restx import Api
from .product import api as ns1
from .productDemand import api as ns2
from .supplier import api as ns3
from .productSupplier import api as ns4
from .productSupplierMap import api as ns5

api = Api(
    title='Maze Bot',
    version='1.0',
    description='A maze bot',
    # All API metadatas
)

api.add_namespace(ns1, path='/product')
api.add_namespace(ns2, path='/product/demand')
api.add_namespace(ns4, path='/product/supplier')
api.add_namespace(ns5, path='/product/supplier/map')

api.add_namespace(ns3, path='/supplier')



# api.add_namespace(ns2, path='/prefix/of/ns2')
# # ...
# api.add_namespace(nsX, path='/prefix/of/nsX')