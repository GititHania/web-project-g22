function print_summery() {
    cart = JSON.parse(window.sessionStorage.getItem("cartItems"));
    flag = false
    if (cart) {
        keys = Object.keys(cart);
        console.log(keys.length)
        if (keys.length > 1) {
            flag = true
        }
    }

    if (flag) {

        method = sessionStorage.getItem("method");
        if (method) {
            var d = 0;
            var total_cost = parseInt(sessionStorage.getItem("total_cost"))
            if (method == "Del") {
                document.getElementById("as_sp").style.display = "none";
                del_cost.innerText = store_del_cost;
                d = 1;
                var address = JSON.parse(sessionStorage.getItem("address"))
                console.log(address)
                if (address) {
                    document.getElementById("ad_city").innerText = address.City;
                    document.getElementById("ad_street").innerText = address.Street;
                    document.getElementById("ad_num").innerText = address.House;

                } else {
                    open_popup("no_address")
                }
            } else {
                document.getElementById("as_del").style.display = "none";
                d = 0;
            }
            var cost = total_cost - (parseInt(points) / 10) + parseInt(store_del_cost) * d;
            document.getElementById("tot_cost").value = cost
            sessionStorage.setItem("final_cost", cost)
            print_items(document.getElementById("items"), cart)
        }
        else {
            open_popup("no_method");
        }
        if (document.getElementById("signin")) {
            open_popup("signin");
        }
    } else {
        if (document.getElementById("txt_no_items")) {
            document.getElementById("txt_no_items").style.display = "block";
        }
    }
}

function store_set() {
    var storeID = document.getElementById("storeSelect").value;
    sessionStorage.setItem("storeID", storeID);
    document.getElementById("add_form").submit();
}

function print_items(itemsList, cart) {
    console.log()
    keys = Object.keys(cart);
    keys.forEach(key => {
        if (key != 'key') {
            var li = document.createElement('li');
            var sp_title = document.createElement('span');
            sp_title.id = "title_sp"
            var title = cart[key].title + " ";
            sp_title.innerText = title
            li.appendChild(sp_title)
            var sp_rest = document.createElement('span');
            var amount = cart[key].amount;
            var cost = parseInt(cart[key].price);
            var text = amount + "X (" + cost + " ₪)";
            sp_rest.innerText = text;
            li.appendChild(sp_rest)
            itemsList.appendChild(li);
        }
    })
}

function save_add() {
    city = document.getElementById("city").value
    street = document.getElementById("street").value
    num = document.getElementById("num").value
    address = {
        'City': city,
        'Street': street,
        'House': num
    }
    sessionStorage.setItem("address", JSON.stringify(address))

}

function save_order(){
    alert("קיבלנו את ההזמנה ובקרוב מאוד תוכל להתענג על עוגית טעימות וחמות!")
}

window.onload = print_summery()