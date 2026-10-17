
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('../frontend/pages', 'index.html')

@app.route('/<page>')
def pages(page):
    return send_from_directory('../frontend/pages', page + '.html')

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('../frontend/static', filename)

if __name__ == '__main__':
    app.run(debug=True)
