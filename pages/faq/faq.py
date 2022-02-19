from flask import Blueprint, render_template
from utilities.db.questions import Question
# faq blueprint definition
faq = Blueprint('faq', __name__, static_folder='static', static_url_path='/faq', template_folder='templates')


# Routes
@faq.route('/FAQ')
def index():
    questions = Question.get_questions()
    return render_template('faq.html', questions = questions)
