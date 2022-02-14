function toggle_inup(to_hide, to_show){
    document.getElementById(to_hide).style.display = "none";
    document.getElementById(to_show).style.display = "block";
}

function check_match(){
    var caption = document.getElementById("not_matched");
    var main = document.getElementById("PasswordNU"); 
    var sec = document.getElementById("PasswordNUSec");
    if (main.value == sec.value){
        caption.style.display = "none";
    } else {
        caption.style.display = "block";
    }
}