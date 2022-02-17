
function toggle_side(side_id) {
    var side = document.getElementById(side_id);
    toggle_element_display(side);
    // make sure the others are hidden (so if you open the cart the menu should close)
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        if (sides[s] != side) {
            sides[s].style.display = "none";
        }
    }
    set_cart()
}

function toggle_element_display(elem) {
    pm = document.getElementById("pm-side")
    if (elem.style.display === "block") {
        if (pm) {
            pm.style.display = "none";
        }
        elem.style.display = "none";
    } else {
        if (pm) {
            pm.style.display = "block";
        }
        elem.style.display = "block";
    }
}

function set_cart() {
    cart = JSON.parse(window.sessionStorage.getItem("cartItems"));
    if (cart) {
        cart_div = document.getElementById('cart_items');
        cart_div.innerHTML = "";
        keys = Object.keys(cart);
        var total_cost = 0;
        keys.forEach(key => {
            if (key != 'key') {
                var br  = "<br/>";
                var lineBreak = document.createElement("hr");
                lineBreak.className = "hr-line long";
                var item_div = document.createElement("div");
                var title = document.createElement("i");
                title.innerHTML = cart[key].title+br;
                item_div.appendChild(title);

                var am_input = document.createElement("input");
                am_input.className = "cart_inp amount small_input add_cookie";
                am_id = "amount"+cart[key].id
                am_input.id = am_id
                var amount = parseInt(cart[key].amount)
                am_input.setAttribute('type', "number");
                am_input.setAttribute('min', 0);
                am_input.setAttribute('max', 12);
                am_input.setAttribute('value', amount);
                item_div.appendChild(am_input);

                var co_input = document.createElement("input");
                co_input.className = "cart_inp amount small_input add_cookie";
                co_id = "cost"+cart[key].id;
                co_input.id = co_id;
                var cost = parseInt(cart[key].price)*amount
                total_cost = total_cost+cost;
                co_input.setAttribute('type', "text");
                co_input.setAttribute('value', cost+" ₪");
                co_input.setAttribute('readonly', true);
                item_div.appendChild(co_input);

                var up_btn = document.createElement("i");
                up_btn.className = "fas fa-edit cartI";
                up_func = "update_cost('"+am_id+"', '"+key+"' )"
                up_btn.setAttribute("onclick",up_func);
                item_div.appendChild(up_btn);

                var del_btn  = document.createElement("i");
                del_btn.className = "fas fa-trash-alt cartI";
                del_fuc = "delete_cookie('"+key+"')"
                del_btn.setAttribute("onclick",del_fuc);
                item_div.appendChild(del_btn);
                item_div.appendChild(lineBreak);

                cart_div.appendChild(item_div)
            }
        });
        total_cost_inp = document.getElementById("total_cost_inp").value = total_cost;
    }

}

function update_cost(am_id, key) {
    cart = JSON.parse(window.sessionStorage.getItem("cartItems"));
    new_amount = document.getElementById(am_id).value;
    if (new_amount == 0) {
        delete cart[key]
    } else {
        console.log (cart[key])
        cart[key]['amount'] = new_amount;
    }
    window.sessionStorage.removeItem("cartItems");
    window.sessionStorage.setItem("cartItems", JSON.stringify(cart));
    set_cart()
}

function delete_cookie (key){
    console.log("this:" +key)

    cart = JSON.parse(window.sessionStorage.getItem("cartItems"));
    delete cart[key]
    window.sessionStorage.removeItem("cartItems");
    window.sessionStorage.setItem("cartItems", JSON.stringify(cart));
    set_cart()
}

