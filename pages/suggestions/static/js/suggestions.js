function open_sg(form_id) {
    login_popup = document.getElementById("signin");
    if (login_popup) {
        open_popup("signin");
    } else {
        open_popup(form_id);
    }
}
