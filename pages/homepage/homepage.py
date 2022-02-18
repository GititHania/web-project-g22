import json
from flask import Blueprint, flash, render_template, redirect, request, session, url_for
from utilities.db.stores import Store

# homepage blueprint definition
homepage = Blueprint('homepage', __name__, static_folder='static',
                     static_url_path='/homepage', template_folder='templates')


# Routes
@homepage.route('/homepage')
@homepage.route('/home')
@homepage.route('/')
def index():
    stores = Store.get_stores()
    return render_template('homepage.html', storeList=stores)


@homepage.route('/set_method', methods=["post"])
def set_meth():
    session["method"] = request.form.get("meth")
    city = request.form.get("City")
    if city:
        address = {'city': city,
                   'street': request.form.get("Street"),
                   'num': request.form.get("Num")}
        session["address"] = address
    print(request.form)
    if request.form.get("storeID"):
        session["StoreID"] = request.form.get("storeID")
    else:
        storeID = Store.find_store(city)
        if storeID < 0:
            flash("no_store")
            redirect('/')
        else:
            session["StoreID"] = storeID
    return redirect('catalog')
