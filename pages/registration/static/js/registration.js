function toggle_inup(to_hide, to_show) {
    document.getElementById(to_hide).style.display = "none";
    document.getElementById(to_show).style.display = "block";
}

function check_pass(mainID, secID) {
    var caption = document.getElementById("not_matched");
    var main = document.getElementById(mainID);
    var sec = document.getElementById(secID);
    if (main.value == sec.value) {
        caption.style.display = "none";
    } else {
        caption.style.display = "block";
    }
    if (main.value.length < 6){
        document.getElementById("too_short").style.display = "block";
    } else {
        document.getElementById("too_short").style.display = "none";
    }
}

function validate_reg() {
    if (document.getElementById("PasswordNU").value != document.getElementById("PasswordNUSec").value) {
        alert("בדוק שנית את הסיסמאות שלך,הן לא זהות")
        return false
    }
    if (!document.getElementById("PasswordNU").checkValidity()) {
        alert("נראה שיש בעיה עם הסיסמה שלך, אנא בדוק כי הכנסת לפחות 6 תווים")
        return false
    }
    if (!document.getElementById("NameNU").checkValidity()) {
        alert("נראה שיש בעיה עם השם שלך, אנא בדוק כי הכנסת שם מלא")
        return false
    }
    if (!document.getElementById("PhoneNU").checkValidity()) {
        alert("נראה שיש בעיה עם הטלפון שלך, אנא בדוק כי הכנסת מספר מלא (ללא תווים)")
        return false
    }
    if (!document.getElementById("EmailNU").checkValidity()) {
        alert('נראה שיש בעיה עם כתובת הדוא"ל שלך, אנא בדוק כי הכנסת כתובת תקינה')
        return false
    }
    return true
}

function close_alert_popup() {
    document.getElementById("alert-popups").style.display = "none";
    document.getElementById("alert").style.display = "none";
}
