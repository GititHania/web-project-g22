from flask import Blueprint, render_template

# suggestions blueprint definition
suggestions = Blueprint('suggestions', __name__, static_folder='static', static_url_path='/suggestions', template_folder='templates')


# Routes
@suggestions.route('/suggestions')
def index():
    return render_template('suggestions.html')
