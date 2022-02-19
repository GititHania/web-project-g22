
from email.headerregistry import Address
import math
from flask import Blueprint, flash, redirect, render_template, request, session
from utilities.db.users import User
from utilities.db.stores import Store
from utilities.db.orders import Order


# summery blueprint definition
summery = Blueprint('summery', __name__, static_folder='static',
                    static_url_path='/summery', template_folder='templates')

# Routes


@summery.route('/summery')
def index():
    if (session.get("StoreID")):
        storeInfo = Store.get_store(session["StoreID"])[0]
        if (session["logged_in"]):
            user = User.get_user(session["email"])[0]
            print(user.Points)
            return render_template('summery.html', store=storeInfo, points=user.Points)
        else:
            return render_template('summery.html', store=storeInfo)
    else:
        stores = Store.get_stores()
        return render_template('no_store.html', storesList=stores)


@summery.route('/set_store', methods=["post"])
def set_store():
    print(request.form)
    session["StoreID"] = request.form.get("store")
    return redirect('summery')


@summery.route('/save_order', methods=["post"])
def save():
    if (session["address"] and session["email"]):
        address = session["address"]
        city = address.city
        street = address.street
        num = address.num
        user = session["email"]
        cost = request.form.get('tot_cost')
        User.update_points(user, calc_new_amount(cost))
        Order.save_order(city, street, num, user, cost)


def calc_new_amount(cost):
    return int(math.ceil(cost/10))


@summery.route('/save_address', methods=["post"])
def save_add():
    city = request.form.get('city')
    street = request.form.get('street')
    num = request.form.get('num')
    address = {'city': city,
               'street': street,
               'num': num}
    session["address"] = address
    return redirect('summery')
