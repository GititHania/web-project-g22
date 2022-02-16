from flask import Blueprint, redirect, render_template
from utilities.db.products import Product

# catalog blueprint definition
catalog = Blueprint('catalog', __name__, static_folder='static', static_url_path='/catalog', template_folder='templates')


# Routes
@catalog.route('/catalog')
def index():
    cookies = Product.get_cookies()
    # print(cookies[0])
    packs = Product.get_packs()
    # print(packs[0])
    return render_template('catalog.html', cookies = cookies, packs = packs)

@catalog.route('/catalog/add')
def add_cookie():
    redirect('catalog')
