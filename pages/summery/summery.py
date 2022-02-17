from flask import Blueprint, flash, render_template, session
from mysqlx import Session
from utilities.db.users import User
from utilities.db.stores import Store


# summery blueprint definition
summery = Blueprint('summery', __name__, static_folder='static',
                    static_url_path='/summery', template_folder='templates')


# Routes
@summery.route('/summery')
def index():
    print(session)
    if (session.get("storeID")):
        storeInfo = Store.get_store(session["storeID"])
        if (session["logged_in"]):
            user = User.get_user(session["email"])
            return render_template('summery.html', store=storeInfo, discount=user.Discounts)
        else:
            return render_template('summery.html', store=storeInfo)
    else:
        return render_template('summery.html')
