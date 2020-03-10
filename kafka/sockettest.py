  
# import os

# import tornado.ioloop
# from tornado.options import define, options, parse_command_line
# import tornado.web

# import socketio

# define("port", default=8888, help="run on the given port", type=int)
# define("debug", default=False, help="run in debug mode")

# sio = socketio.AsyncServer(async_mode='tornado')

# # class MainHandler(tornado.web.RequestHandler):
# #     def get(self):
# #         print("hi")


# @sio.event
# async def ping_from_client(sid):
#     await sio.emit('pong_from_server', room=sid)

# @sio.event
# def connect(sid, environ):
#     print('connect ', sid)

# @sio.event
# def disconnect(sid):
#     print('disconnect ', sid)

# @sio.on('message')
# def another_event(sid, data):
#     print(data)

# def main():
#     parse_command_line()
#     app = tornado.web.Application(
#         [
#             # (r"/", MainHandler),
#             (r"/socket.io/", socketio.get_tornado_handler(sio)),
#         ],
#         # template_path=os.path.join(os.path.dirname(__file__), "templates"),
#         # static_path=os.path.join(os.path.dirname(__file__), "static"),
#         debug=options.debug,
#     )
#     app.listen(options.port)
#     print("running")
#     tornado.ioloop.IOLoop.current().start()
#     sio.emit('FromAPI', "fuck")



# if __name__ == "__main__":
#     main()

from sanic import Sanic
from sanic.response import html

import socketio



sio = socketio.AsyncServer(async_mode='sanic')
app = Sanic()
sio.attach(app)

@sio.event
def connect(sid, environ):
    print('connect ', sid)

# @app.route('/')
# def index(request):
#     with open('latency.html') as f:
#         return html(f.read())


# @sio.event
# async def ping_from_client(sid):
#     await sio.emit('pong_from_server', room=sid)

# app.static('/static', './static')

if __name__ == '__main__':
    app.run()