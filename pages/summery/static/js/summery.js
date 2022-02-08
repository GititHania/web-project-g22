var logged = false;


function check_if_loged_in(){
    // check if looged in
    if (!logged) {
        open_popup("signinup");
    }
}


function close_popup() {
    if (!logged) {
        alert("על מנת להמשיך יש להירשם או להתחבר לאתר.")
    } else {
        document.getElementById("pm-popups").style.display = "none";
        document.getElementById("signinup").style.display = "none";
    }
}

window.onload = check_if_loged_in();
