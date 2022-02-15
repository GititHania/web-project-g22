from flask import Blueprint, redirect, render_template, request, session

# cart blueprint definition
cart = Blueprint('cart', __name__, static_folder='static', static_url_path='/cart', template_folder='templates')

@cart.route('/update', methods=["Get"])
def hello():
    print("dslkjaj")
    return redirect(request.args['loc'])