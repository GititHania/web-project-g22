from flask import Blueprint, flash, redirect, render_template, request, session
from utilities.db.cards import Card
from datetime import date

from utilities.db.orders import Order

# payment blueprint definition
payment = Blueprint('payment', __name__, static_folder='static',
                    static_url_path='/payment', template_folder='templates')


# Routes
@payment.route('/payment')
def index():
    if (session["logged_in"]):
        res = Card.get_card(session["email"])
        if res > 0:
            saved_card = res[0]
            return render_template('payment.html', card=saved_card)

    return render_template('payment.html')


@payment.route('/paying', methods=["post"])
def paying():
    form = request.form
    YearEx = form.get("YearEx")
    MonthEx = form.get("MonthEx")
    ex_date = get_date(YearEx, MonthEx)
    now = date.today()
    is_valid = str(now)[:10] < ex_date
    if not is_valid:
        flash("הכרטיהס לא בתוקף... אולי תנסה אחר?")
        redirect('payment')
    else:
        address = session["address"]
        city = address.city
        street = address.street
        num = address.num
        user = session["email"]
        cost = request.form.get('to_pay')
        ID = form.get("IDP")
        card_num = form.get("CardP")
        ccv = form.get("ccvP")
        Order.save_order(city, street, num, user, cost)
        Card.save_card(card_num, ccv, ex_date, ID, is_valid, user)
        return redirect('/')


def get_date(year, month):
    if (int(month) < 10):
        month = "0"+month
    date = year+"-"+month+"-01"
    return date
