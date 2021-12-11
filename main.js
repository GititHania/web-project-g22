var method;
var address;

function set_method(meth) {
    method = meth;
    if (method == "Del") {
        var city_value = document.getElementById("City").value;
        var street_value = document.getElementById("street").value;
        var house_value = document.getElementById("houseNum").value;
        if (city_value && street_value && house_value) {
            address = { City: city_value, Street: street_value, House: house_value }
            find_store(address);
            change_location('OrderCookies.html');
        } else {
            alert("אנא מלא את פרטיך");
        }
    } else {
        change_location('OrderCookies.html');
    }
}

function find_store(address){
    // todo
}
 

function change_location(loction) {
    window.location.href = window.location.href.split("?")[0];
    window.location.href = loction;
}

function find_location() {
    if (window.navigator.geolocation) {
        const denied_access = a => {
            alert("לא ניתן למצוא את המיקום שלך...\n אנא הכנס מקום");
            make_address_editable()
        }
        const successfulLookup = position => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=278323ccecb64c7dbaeac9385784430c`)
                .then(response => response.json()
                    .then(read_response));
        }
        window.navigator.geolocation.getCurrentPosition(successfulLookup, denied_access);
    } else {
        alert("לא ניתן למצוא את המיקום שלך...\n אנא הכנס מקום");
        make_address_editable()
    }
}

function read_response(res) {
    var loc = res.results[0].formatted;
    console.log(loc);
    if (loc) {
        var locs = loc.split(",");
        document.getElementById('street').value = locs[0];
        document.getElementById('City').value = locs[1].replace(/\s+/g, '').replace(/[0-9]/g, '');  // "clean" the city from numbers and white spaces
    }

}


function make_address_editable() {
    var form = document.getElementById("address_form");
    var inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = false;
    }

}

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

function send_to_whatsapp() {
    var url = "https://api.whatsapp.com/send?phone=+972527333037";
    window.open(url);

}


function close_form(form_id) {
    document.getElementById("page-mask").style.display = "none";
    var forms = document.getElementsByClassName('popup');
    for (let i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
}

function open_form(form_id) {
    document.getElementById(form_id).style.display = "block";
    document.getElementById("page-mask").style.display = "block";

}

function get_summery() {
    var details = {
        "StoreName": "תל אביב, דיזניגוף 205",
        "StorePhone": "052-9856147",
        "PaymentMethod": "אשראי",
        "Cost": '90 ש"ח',
        "ATA": "כ - 35 דקות",
    }
    document.getElementById("StoreName").value = details.StoreName;
    document.getElementById("StorePhone").value = details.StorePhone;
    document.getElementById("Cost").value = details.Cost;
    document.getElementById("PaymentMethod").value = details.PaymentMethod;
    document.getElementById("ATA").value = details.ATA;

}

function listen_to_questions() {

    var faq = document.getElementsByClassName("faq-question");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            toggle_element_display(body)
        });
    }
}

function toggle_element_display(elem) {
    if (elem.style.display === "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

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
}

function Send_contact() {
    if (validate_form('Contact_form', '')) {
        var client_name = document.getElementById("NameC").value;
        var msg = "תודה על הפנייה " + client_name + " אנחנו נחזור אליך בהקדם האפשרי";
        alert(msg);
        change_location('main.html');
    }
}

function update_cost(cart_num, type) {
    var amount = cart_num + 'a';
    var cost = cart_num + 'c';
    var price = 0;
    switch (type) {
        case 'singleR':
            price = 10;
            break;
        case '6pack':
            price = 55;
            break;
        case '12pack':
            price = 105;
            break;
        case 'singleS':
            price = 13;
            break;
    }
    var item_cost = document.getElementById(amount).value * price;
    document.getElementById(cost).value = item_cost;
    var cart_costs = document.getElementsByClassName('cost');
    var total_cost = 0;
    console.log(cart_costs);
    for (let c = 0; c < cart_costs.length; c++) {
        total_cost = total_cost + parseInt(cart_costs[c].value);
    }
    document.getElementById('tc').value = total_cost;

}

function validate_form(formID, go_to) {
    var validate = true;
    var form = document.getElementById(formID);
    var inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            validate = false
        }
    }
    if (validate) {
        if (go_to.includes('html')) {
            change_location(go_to);
        } else {
            return true;
        }
    } else {
        alert("!אנא בדוק את הערכים שהכנסת");
    }

}