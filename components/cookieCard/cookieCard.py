from flask import Blueprint, render_template

# cookieCard blueprint definition
cookieCard = Blueprint('cookieCard', __name__, static_folder='static', static_url_path='/cookieCard', template_folder='templates')
