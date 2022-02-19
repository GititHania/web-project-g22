from flask import Blueprint, flash, render_template, request, redirect, session
from utilities.db.suggestions import Suggestion

# suggestions blueprint definition
suggestions = Blueprint('suggestions', __name__, static_folder='static',
                        static_url_path='/suggestions', template_folder='templates')


# Routes
@suggestions.route('/suggestions')
def index():
    if session["logged_in"]:
        suggestions = Suggestion.get_suggestions()
        return render_template('suggestions.html', suggestions=suggestions)
    else:
        return render_template('suggestions.html')


@suggestions.route('/new_sg', methods=["POST"])
def new_sg():
    base = request.form.get("baseSg")
    top = request.form.get("toppingSg")
    if Suggestion.post_suggestion(session["email"], base, top) > 0:
        flash("תודה רבה על ההצעה,")
        flash("חודש הבא היא תופיע ברשימת ההצבעות")
    else:
        flash("הייתה בעיה בשמירת ההצבעה, נסו שוב")
    
    return redirect('suggestions')

@suggestions.route('/vote', methods=["POST"])
def send_vote():
    sug_id = request.form.get("fav_sug")
    cur_votes = Suggestion.get_votes(sug_id)[0]
    Suggestion.update_votes(sug_id, int(cur_votes.votes)+1)
    flash("תודה על ההצבעה!")
    return redirect('suggestions')


