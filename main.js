function change_location(loction) {
    console.log("s");
    window.location.href = loction;
}



function find_location() {
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

function send_to_whatsapp(){
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

function toggle_side(side_id){
    var side = document.getElementById(side_id);
    toggle_element_display(side); 
// make sure the others are hidden (so if you open the cart the menu should close)
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        if (sides[s] != side){
            sides[s].style.display = "none";
        }
        
    }
}

function Send_contact(){
    var client_name = document.getElementById("NameC").value;
    var msg = "תודה על הפנייה "+client_name+" אנחנו נחזור אליך בהקדם האפשרי";
    alert(msg);

}