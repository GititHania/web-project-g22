function open_sg(form_id){
    var logged_in= "<%= Session['logged_in']%>";
    console.log(logged_in)
    if (logged_in) {
        open_popup(form_id);
    } else {
        alert("ההצבעה הינה ללקוחות רשומים בלבד")
        change_location
    }
}