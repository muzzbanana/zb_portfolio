from flask import Flask, render_template, url_for
from flask_assets import Environment, Bundle
import os.path

app = Flask(__name__)
assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('styles/*.scss', filters='pyscss', output='css/main.css')
assets.register('scss_all', scss)

@app.before_request
def before_request():
    app.jinja_env.cache = {}

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
    print('new')
    return url_for(endpoint, **values)

@app.route('/', methods=['GET'])
def home():
    name = 'home'
    return render_template('home.html', name=name)

@app.route('/construction', methods=['GET'])
def construction():
    name = 'construction'
    return render_template('landing.html', name=name)

@app.route('/work', methods=['GET'])
def work():
    name = 'work'
    return render_template('work.html', name=name)

@app.route('/ink-envy', methods=['GET'])
def ink_envy():
    name = 'ink-envy'
    return render_template('ink-envy.html', name=name)

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)




