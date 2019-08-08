from flask import Flask, render_template, url_for
from flask_assets import Environment, Bundle
import os.path

app = Flask(__name__)
assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('styles/main.scss', filters='pyscss', output='css/main.css')
assets.register('scss_all', scss)

# prevents cached versions
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                 endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)




