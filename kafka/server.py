from setup import env, db
from flask import Flask
import json
import datetime
from decimal import Decimal
import logging


app = Flask(__name__)


@app.errorhandler(500)
def internal_server_error(error):
    app.logger.error('Server Error: %s', (error))
    return "error", 500


@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', (e))
    return e, 500


@app.route('/')
def hello_world():
    try:
        rows = db.query("productsupplier").select().eval()
        response = app.response_class(
            response=json.dumps(jsonify(rows)),
            status=200,
            mimetype='application/json'
        )
        return response
    except Exception as e:
        internal_server_error(e)


def jsonify(rows):
    for row in rows:
        row['timestamp'] = str(row['timestamp'])
    return rows


if __name__ == "__main__":
    app.run()


# config.py
class BaseConfig(object):
    DEBUG = True
    TESTING = False
    # sqlite :memory: identifier is the default if no filepath is present
    LOGGING_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    LOGGING_LOCATION = 'bookshelf.log'
    LOGGING_LEVEL = logging.DEBUG


def configure_app(app):
    config_name = os.getenv('FLASK_CONFIGURATION', 'default')
    app.config.from_object(config[config_name])
    app.config.from_pyfile('config.cfg', silent=True)
    # Configure logging
    handler = logging.FileHandler(app.config['LOGGING_LOCATION'])
    handler.setLevel(app.config['LOGGING_LEVEL'])
    formatter = logging.Formatter(app.config['LOGGING_FORMAT'])
    handler.setFormatter(formatter)
    app.logger.addHandler(handler)
