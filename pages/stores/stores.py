from flask import Blueprint, render_template
from utilities.db.stores import Store

# stores blueprint definition
stores = Blueprint('stores', __name__, static_folder='static', static_url_path='/stores', template_folder='templates')


# Routes
@stores.route('/stores')
def index():
    storesList = Store.get_stores()
    return render_template('stores.html', storeList = storesList)
