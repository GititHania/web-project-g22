from flask import Blueprint, render_template

# signinup blueprint definition
signinup = Blueprint('signinup', __name__, static_folder='static', static_url_path='/signinup', template_folder='templates')
