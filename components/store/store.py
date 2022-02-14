from flask import Blueprint, render_template


stores = {
    '0', {'s_city': 'תל אביב', 's_street': 'ארלוזורוב', 's_num': 5, 's_phone': '052-5555555'},
    '1', {'s_city': 'תל אביב', 's_street': 'דיזניגוף', 's_num': 205, 's_phone': '052-9856147'}
}

# store blueprint definition
store = Blueprint('store', __name__, static_folder='static', static_url_path='/store', template_folder='templates')
