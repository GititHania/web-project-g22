function open_sg(form_id){
    loggedin=false;
    if (loggedin) {
        open_popup(form_id);
    } else {
        alert("ההצבעה הינה ללקוחות רשומים בלבד")
        open_popup("signinup");
    }
}