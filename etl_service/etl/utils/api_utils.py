
from etl.utils import env
from . import db, env
from flask import Flask
import logging
import json
import redis as redis_py
from datetime import datetime

class redisUtil:
    def __init__(self):
        self.pool = redis_py.ConnectionPool(host='localhost', port=6379, db=0)
    def redis(self):
        return redis_py.Redis(connection_pool=self.pool)

def redisPool():
    return redisUtil()

def marshal(args):
    cols, vals = list(), list()
    for col, val in args.items():
        if val:
            cols.append(col)
            vals.append(val)
    return cols, vals


def _get_target_cols():
    return (
        "date",
        "updated_at",
    )


def jsonify(rows):
    for row in rows:
        # smallestDate = None
        for target_col in _get_target_cols():
            # if target_col == "updated_at":
            #     if not smallestDate:
            #         smallestDate = datetime.strptime(str(row[target_col]).split(".")[0], '%Y-%m-%d %H:%M:%S')
            #     if  datetime.strptime(str(row[target_col]).split(".")[0], '%Y-%m-%d %H:%M:%S') > smallestDate:
            #         smallestDate = datetime.strptime(str(row[target_col]).split(".")[0], '%Y-%m-%d %H:%M:%S')
            if row.get(target_col):
                row[target_col] = str(row[target_col])
        # row["updated_at"] = str(smallestDate)
    return rows

# # ?sort=last_update.desc
# def get_product(app, req):
#     res = db.query("product").select()
#     if req.args.get('sort'):
#         col, sort = req.args['sort'].split(".")
#         res.order_by(col, sort)
#     return app.response_class(
#         response=jsonify(res.eval()),
#         status=200,
#         mimetype='application/json'
#     )


# def add_product(app, req):
#     res = db.query("product").pk("p_id")
#     cols, vals = list(), list()
#     for col, val in req.form.items():
#         cols.append(col)
#         vals.append(type_check(val))
#     res.write(*vals).into(*cols)
#     return app.response_class(
#         response=jsonify(res.eval()),
#         status=200,
#         mimetype='application/json'
#     )


# def type_check(s):
#     if is_number(s):
#         return float(s)
#     return s


# def is_number(s):
#     try:
#         float(s)
#         return True
#     except ValueError:
#         return False


# def quotify(s):
#     if s == "":
#         return '""'

#     depth = 0
#     in_word = False
#     needs_quotes = False
#     for c in s:
#         if c == '"':
#             if in_word:
#                 depth -= 1
#             else:
#                 depth += 1
#         else:
#             if depth == 0:
#                 needs_quotes = True
#                 break
#             in_word = not c.isspace()

#     if needs_quotes:
#         return '"' + s + '"'
#     else:
#         return s

# # config.py


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
