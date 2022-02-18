from flask import Blueprint, flash, render_template, session
from utilities.db.users import User
from utilities.db.stores import Store


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
        return render_template('summery.html')
