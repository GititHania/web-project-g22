function change_location(loction) {
    window.location.href = loction;
}

function find_location() {
    console.log("sd");
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

function get_summery(){
    var details = {
        "StoreName": "תל אביב, דיזניגוף 205",
        "StorePhone": "052-9856147",
        "PaymentMethod":"אשראי",
        "Cost":'90 ש"ח',
        "ATA":"כ - 35 דקות",
    }
    getElementById("StoreName").innerHTML = details.StoreName;
    getElementById("StorePhone").innerText = details.StorePhone;
    getElementById("Cost").innerText = details.Cost;
    getElementById("PaymentMethod").innerText = details.PaymentMethod;
    getElementById("ATA").innerText = details.ATA;

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
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}