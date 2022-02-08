from flask import Blueprint, render_template

# stores blueprint definition
stores = Blueprint('stores', __name__, static_folder='static', static_url_path='/stores', template_folder='templates')


# Routes
@stores.route('/stores')
def index():
    storesList = {
    '0': {'s_city': 'תל אביב', 's_street': 'ארלוזורוב', 's_num': 5, 's_phone': '052-5555555'},
    '1': {'s_city': 'תל אביב', 's_street': 'דיזניגוף', 's_num': 205, 's_phone': '052-9856147'},
    '2': {'s_city': 'רמת גן', 's_street': 'הבורסה', 's_num': 3, 's_phone': '052-3333333'},
    '3': {'s_city': 'גבעתיים', 's_street': 'שיינקין', 's_num': 36, 's_phone': '052-4444512'},
    } # needs to be from DB  

    return render_template('stores.html', stores = storesList)
