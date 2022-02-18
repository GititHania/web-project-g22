from flask import Blueprint, redirect, render_template, request
from utilities.db.products import Product

# catalog blueprint definition
catalog = Blueprint('catalog', __name__, static_folder='static',
                    static_url_path='/catalog', template_folder='templates')


# Routes
@catalog.route('/catalog')
def index():
    cookies = Product.get_cookies()
    packs = Product.get_packs()
    return render_template('catalog.html', cookies=cookies, packs=packs)


@catalog.route('/type')
def fillter_type():
    packs = Product.get_packs()
    singles = Product.get_cookies()
    type = request.args.get('type')
    if type == 'pack':
        return render_template('catalog.html', cookies=[], packs=packs)
    else:
        return render_template('catalog.html', cookies=singles, packs=[])


@catalog.route('/base')
def fillter_base():
        selected_base = request.args.get('base')
        print(selected_base)
        cookies = Product.get_cookies_by_base(selected_base)
        return render_template('catalog.html', cookies = cookies, packs = [])

