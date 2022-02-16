from flask import Blueprint, flash, render_template, request, redirect, session
from utilities.db.suggestions import Suggestion

# suggestions blueprint definition
suggestions = Blueprint('suggestions', __name__, static_folder='static',
                        static_url_path='/suggestions', template_folder='templates')


# Routes
@suggestions.route('/suggestions')
def index():
    return render_template('suggestions.html')


@suggestions.route('/voting')
def index_vote():
    # if session["logged_in"]:
    return render_template('voteing.html')
    # else:
    #     return redirect('suggestions')


@suggestions.route('/new_sg', methods=["POST"])
def new_sg():
    base = request.form.get("baseSg")
    top = request.form.get("toppingSg")
    comments = request.form.get("textSg")
    if Suggestion.post_suggestion(session["email"], base, top, comments) > 0:
        flash("תודה רבה על ההצעה,")
        flash("חודש הבא היא תופיע ברשימת ההצבעות")
    else:
        flash("הייתה בעיה בשמירת ההצבעה, נסו שוב")
    
    return redirect('suggestions')
