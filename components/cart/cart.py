from flask import Blueprint, render_template, session

# cart blueprint definition
cart = Blueprint('cart', __name__, static_folder='static', static_url_path='/cart', template_folder='templates')

def update_cart():
    items = session["items"]