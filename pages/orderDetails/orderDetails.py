from flask import Blueprint, render_template

# orderDetails blueprint definition
orderDetails = Blueprint('orderDetails', __name__, static_folder='static', static_url_path='/orderDetails', template_folder='templates')


# Routes
@orderDetails.route('/orderDetails')
def index():
    return render_template('orderDetails.html')
