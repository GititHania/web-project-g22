function close_side() {
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        sides[s].style.display = "none";
    }
    document.getElementById("pm-side").style.display = "none";
}

function add_imgs(){
    cards = document.getElementsByClassName("cookie_img"); 
    for (let c = 0; c < cards.length; c++) {
        var card = cards[c];
        if (card.classList.contains("single")){
            topping = card.classList[2]
            card.src = "cookieCard/imgs/"+topping+".JPG"
        } else {
            size = card.classList[2]
            card.src = "cookieCard/imgs/"+size+"pack.JPG"
        }
    }
   
}

// window.onload = add_imgs()

function fillter_cookies(show_class) {
    cookie_cards = document.getElementsByClassName('cookie_card');
    for (let i = 0; i < cookie_cards.length; i++) {
        var card = cookie_cards[i]
        var classes = card.classList;
        card.style.display = "none";
        for (let c = 0; c < classes.length; c++) {
            if (classes[c] == show_class) {
                card.style.display = "block";
            }
        }
    }
}