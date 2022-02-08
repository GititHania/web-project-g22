from flask import Blueprint, render_template

# summery blueprint definition
summery = Blueprint('summery', __name__, static_folder='static', static_url_path='/summery', template_folder='templates')


# Routes
@summery.route('/summery')
def index():
    return render_template('summery.html')
