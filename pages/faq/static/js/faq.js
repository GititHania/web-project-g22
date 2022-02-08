
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

window.load = listen_to_questions()

