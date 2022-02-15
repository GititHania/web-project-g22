from flask import Flask
from flask_session import Session


###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

###### Pages
## Homepage
from pages.homepage.homepage import homepage
app.register_blueprint(homepage)

## About
from pages.about.about import about
app.register_blueprint(about)

## registration
from pages.registration.registration import registration
app.register_blueprint(registration)

## summery
from pages.summery.summery import summery
app.register_blueprint(summery)

## payment
from pages.payment.payment import payment
app.register_blueprint(payment)

## Catalog
from pages.catalog.catalog import catalog
app.register_blueprint(catalog)

## FAQ
from pages.faq.faq import faq
app.register_blueprint(faq)

## orderDetails
from pages.orderDetails.orderDetails import orderDetails
app.register_blueprint(orderDetails)

## contact
from pages.contact.contact import contact
app.register_blueprint(contact)

## stores
from pages.stores.stores import stores
app.register_blueprint(stores)

## suggestions
from pages.suggestions.suggestions import suggestions
app.register_blueprint(suggestions)

## Page error handlers
# from pages.page_error_handlers.page_error_handlers import page_error_handlers
# app.register_blueprint(page_error_handlers)


###### Components
## Main menu
from components.main_menu.main_menu import main_menu
app.register_blueprint(main_menu)

## Cart
from components.cart.cart import cart
app.register_blueprint(cart)


## TopNav
from components.TopNav.TopNav import TopNav
app.register_blueprint(TopNav)

## signinup
from components.signinup.signinup import signinup
app.register_blueprint(signinup)

## cookieCard
from components.cookieCard.cookieCard import cookieCard
app.register_blueprint(cookieCard)

app.run()