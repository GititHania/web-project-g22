from flask import Blueprint, render_template

# catalog blueprint definition
catalog = Blueprint('catalog', __name__, static_folder='static', static_url_path='/catalog', template_folder='templates')


# Routes
@catalog.route('/catalog')
def index():
    cookies = {
        '0': {'class': 'milk', 'base': 'שוקולד חלב', 'topping': 'M&M', 'price': 10},
        '1': {'class': 'dark', 'base': 'שוקולד מריר ', 'topping': 'קינדר', 'price':  10},
        '2': {'class': 'milk', 'base': 'שוקולד חלב', 'topping': 'אוריאו', 'price':  10},
        '3': {'class': 'white', 'base': 'שוקולד לבן', 'topping': 'פיסטוקים', 'price':  10}     
    } #to do from DB
    packs = {
        '0' : {'size': 6, 'price': 55},
        '1' : {'size': 12, 'price': 105}
    } #to do from DB
    return render_template('catalog.html', cookies = cookies, packs = packs)
