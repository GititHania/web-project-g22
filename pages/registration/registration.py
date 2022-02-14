from flask import Blueprint, render_template, redirect, request, session
from utilities.db.users import Users

# registration blueprint definition
registration = Blueprint('registration', __name__, static_folder='static',
                         static_url_path='/registration', template_folder='templates')


@registration.route('/registration')
def index():
    if session.get("logged_in"):
        return redirect('/my_acount')
    return render_template('registration.html')


@registration.route('/my_acount')
def ma_index():
    if session.get("logged_in"):
        return render_template('my_acount.html')
    return redirect("/registration")


@registration.route('/register', methods=["POST"])
def register():
    email = request.form.get("EmailNU")
    full_name = request.form.get("NameNU")
    phone_num = request.form.get("PhoneNU")
    password = request.form.get("PasswordNU")
    result = Users.get_user(email)
    if result and len(result) >= 1:
        return f'הדוא"ל הזה כבר קיים במערכת, אולי התכוונת להתחבר?'
    else:
        if Users.insert_user(email, full_name, password, phone_num) > 0:
            session["email"] = email
            session["full_name"] = full_name
            session["logged_in"] = True
            return redirect('\my_acount')
        else:
            return "ההרשמה נכשלה:( אנא נסו שוב", 400


@registration.route('/log_in', methods=["POST"])
def log_in():
    email = request.form.get("EmailEU")
    password = request.form.get("PasswordEU")
    result = Users.get_user(email)
    print(result)
    if not result:
        return f"The mail {email} not exists. Try register instead/", 400

    elif result[0].Password == password:
        session["email"] = result[0].Email
        session["full_name"] = result[0].FullName
        session["logged_in"] = True
        return redirect('\my_acount')
    else:
        return "Incorrect password. Try again.", 400


@registration.route('/log_out')
def log_out():
    session["email"] = ""
    session["full_name"] = ""
    session["logged_in"] = False
    return redirect('/')

