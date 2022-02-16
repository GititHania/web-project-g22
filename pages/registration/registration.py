from flask import Blueprint, render_template, redirect, request, session, flash, url_for
from utilities.db.users import User

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
    result = User.get_user(email)
    if result and len(result) >= 1:
        flash('כתובת הדוא"ל הזו כבר קיימת במערכת ')
        flash('אולי התכוונת להתחבר?')
        return redirect('registration')

    else:
        if User.insert_user(email, full_name, password, phone_num) > 0:
            session["email"] = email
            session["full_name"] = full_name
            session["logged_in"] = True
            return redirect('\my_acount')
        else:
            flash('נראה שההרשמה נכשלה:(')
            flash('אנא נסו שוב')
            return redirect('registration')


@registration.route('/log_in', methods=["POST"])
def log_in():
    email = request.form.get("EmailEU")
    password = request.form.get("PasswordEU")
    result = User.get_user(email)
    print("here")

    if not result:
        flash("הכתובת שהוכנסה לא קיימת אצלנו.. ")
        flash(" אנא נסו שוב או הירשמו")
        return redirect('registration')

    elif result[0].Password == password:
        session["email"] = result[0].Email
        session["full_name"] = result[0].FullName
        session["logged_in"] = True
        return redirect('my_acount')
    else:
        flash("הסיסמה לא נכונה... נסו שוב")
        return redirect('registration')


@registration.route('/log_out')
def log_out():
    session["email"] = ""
    session["full_name"] = ""
    session["logged_in"] = False
    return redirect('/')


@registration.route('/edit_user', methods=["POST"])
def edit():
    user_email = session["email"]
    old_details = User.get_user(user_email)
    print(request.form)
    full_name = request.form.get("NameN")
    phone_num = request.form.get("PhoneN")
    password = request.form.get("PasswordN")
    print(full_name)
    new_name = full_name if full_name else old_details[0].FullName
    new_phone_num = phone_num if phone_num else old_details[0].PhoneNumber
    new_password = password if password else old_details[0].Password
    if User.update_Info(user_email, new_name, new_password, new_phone_num) > 0:
        session["full_name"] = new_name
    else:
        flash("לא הצלחנו לשנות את הפרטים...")
        flash("נסה שוב")

    return redirect('my_acount')
