
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('../frontend/pages', 'index.html')

@app.route('/static/js/script.js')
def javascript():
    return send_from_directory('../frontend/static/js', 'script.js')

if __name__ == '__main__':
    app.run(debug=True)
