import email
from flask import Blueprint, render_template, request
from utilities.db.users import Users


# signinup blueprint definition
signinup = Blueprint('signinup', __name__, static_folder='static',
                     static_url_path='/signinup', template_folder='templates')


def isExist(email):
    res = Users.get_user(email)
    return (len(res) >= 1)

@signinup.route('/register', methods=["POST"])
def register():
    print( request.json)
    print("regg")
    email = request.json["EmailNU"]
    full_name = request.json["NameNU"]
    phone_num = request.json["PhoneNU"]
    password = request.json["PasswordNU"]
    if isExist(email): return f'הדוא"ל הזה כבר קיים במערכת, אולי התכוונת להתחבר?'
    else:
        if Users.insert_user(email, full_name, password, phone_num) > 0:
            return ""
        else:
            return "ההרשמה נכשלה:( אנא נסו שוב", 400
