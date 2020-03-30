from .setup import env
from .utils import db, api as utils
from flask import Flask, request
from flask_restx import Api
import logging

app = Flask(__name__)
api = Api(app)

@app.errorhandler(500)
def internal_server_error(error):
    app.logger.error('Server Error: %s', (error))
    return error


@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', (e))
    return e, 500


# @app.route('/product', methods=['GET', 'POST'])
# def product():
#     try:
#         if request.method == 'POST':
#             return utils.add_product(app, request)
#         else:
#             return utils.get_product(app, request)
#     except Exception as e:
#         internal_server_error(e)


@app.route('/')
def index():
    try:
        #desc by default
        rows = db.query("productsupplier").select().join("product").on(
            "p_id").join("supplier").on("s_id").order_by("price").eval()
        return app.response_class(
            response=utils.stringfy(rows),
            status=200,
            mimetype='application/json'
        )
    except Exception as e:
        internal_server_error(e)


if __name__ == "__main__":
    app.run()
