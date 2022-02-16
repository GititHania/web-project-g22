function open_sg(form_name){
    login_popup = document.getElementById("signin");
    if (login_popup) {
        open_popup("signin");
    } else {
        switch(form_name){
            case "vote":
                change_location('/voting');
                break;
            case "proposal":
                open_popup("sg_form");
                break
        }
    }
}
