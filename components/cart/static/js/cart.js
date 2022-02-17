function get_buys_from_session(){
    cart_div = document.getElementById(cart_items);
    cart = JSON.parse(window.sessionStorage.getItem("cartItems"))
    // c = ""
    // cart.forEach(item => {
    //     c = c+item["id"]
    // });

    console.log(cart.keys)
    cart_div.innerHTML = cart.keys
}


window.onload = get_buys_from_session()