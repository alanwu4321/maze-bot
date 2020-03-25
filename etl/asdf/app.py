from flask import Flask
from asdf.apis import api


def main():
    app = Flask(__name__)
    api.init_app(app)
    app.run(debug=True)

# if __name__ == "__main__":
#     app.run(debug=True)