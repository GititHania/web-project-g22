function close_side() {
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        sides[s].style.display = "none";
    }
    document.getElementById("pm-side").style.display = "none";
}

function add_imgs() {
    cards = document.getElementsByClassName("cookie_img");
    for (let c = 0; c < cards.length; c++) {
        var card = cards[c];
        if (card.classList.contains("single")) {
            topping = card.classList[2]
            card.src = "cookieCard/imgs/" + topping + ".JPG"
        } else {
            size = card.classList[2]
            card.src = "cookieCard/imgs/" + size + "pack.JPG"
        }
    }

}


function start_cart() {
    if (!sessionStorage.getItem("cartItems")) {
        sessionStorage.setItem("cartItems", JSON.stringify({ 'key': 'cookieInfo' }))
    }
}

window.onload = start_cart()


function add_to_cart(key, info) {
    if (sessionStorage.getItem("cartItems")) {
        cart = JSON.parse(window.sessionStorage.getItem("cartItems"));
        if (info['amount'] == '0') {
            if (cart[key]) {
                delete cart[key];
            }
        } else {
            cart[key] = info
        }

        window.sessionStorage.removeItem("cartItems");
        window.sessionStorage.setItem("cartItems", JSON.stringify(cart));

    } else {
        first = { 'key': 'cookieInfo' }
        window.sessionStorage.setItem("cartItems", JSON.stringify(first));
        add_to_cart(key, info)
    }
    console.log(JSON.parse(window.sessionStorage.getItem("cartItems"))); 
    set_cart()
}

function add_custom_made() {
    console.log("(Geolocation()")
    amount = document.getElementById("amount_cus").value;
    base = document.getElementById("baseSelect").value;
    topping = document.getElementById("toppingSelect").value;
    title = "עוגיית "+base+" עם "+topping;
    var cus_cookie = {
        'base': base, 'topping': topping, 'amount': amount, 'title': title, 'price' : 13
    }
    var key = base + topping;
    add_to_cart(key, cus_cookie);
    close_popup()
}