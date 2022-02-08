from flask import Blueprint, render_template

# faq blueprint definition
faq = Blueprint('faq', __name__, static_folder='static', static_url_path='/faq', template_folder='templates')


# Routes
@faq.route('/faq')
def index():
    return render_template('faq.html')
