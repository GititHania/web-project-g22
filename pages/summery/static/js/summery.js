
function check_if_loged_in(){
    myStorage = window.sessionStorage;

    alert(myStorage)
    if (!session["logged_in"]) {
        open_popup("signinup");
    }
}


function close_popup() {
    if (!session["logged_in"]) {
        alert("על מנת להמשיך יש להירשם או להתחבר לאתר.")
    } else {
        document.getElementById("pm-popups").style.display = "none";
        document.getElementById("signinup").style.display = "none";
    }
}

window.onload = check_if_loged_in();
