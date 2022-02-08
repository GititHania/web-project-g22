from flask import Blueprint, render_template

# TopNav blueprint definition
TopNav = Blueprint('TopNav', __name__, static_folder='static', static_url_path='/TopNav', template_folder='templates')
