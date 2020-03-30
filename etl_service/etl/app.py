from flask import Flask
from etl.apis import api
from flask_cors import CORS


def main():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})
    api.init_app(app)
    app.run(debug=True)

# if __name__ == "__main__":
#     app.run(debug=True)