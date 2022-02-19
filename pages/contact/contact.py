from flask import Blueprint, redirect, render_template, request, flash
from utilities.db.messages import Message

# contact blueprint definition
contact = Blueprint('contact', __name__, static_folder='static',
                    static_url_path='/contact', template_folder='templates')


# Routes
@contact.route('/contact')
def index():
    return render_template('contact.html')


@contact.route('/send', methods=["post"])
def send():
    form = request.form
    Name = form.get("NameC")
    email = form.get("EmailC")
    phone = form.get("PhoneC")
    topic = form.get("TopicC")
    msg = form.get("Msg")
    Message.send_Msg(Name, email, phone, topic, msg)
    return redirect('/')
