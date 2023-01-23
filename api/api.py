import time
from flask import Flask
from flask import request
from model.main import test,essai,createPost

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/test')
def get_current_temperature():  
    return {'test': 20}

@app.route('/api/test2')
def getTest():
    un = request.args.get('un')
    deux = request.args.get('deux')
    return {'te': test(int(un),int(deux))}

@app.route('/api/essai')
def getEssai():
    un = request.args.get('un')
    deux = request.args.get('deux')
    return {'te': essai(int(un),int(deux))}

@app.route('/api/getPost')
def getCreatePost():
    res = createPost()
    print(res)
    return res