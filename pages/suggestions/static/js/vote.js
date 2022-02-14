function check_if_logged(){
    logged = false;
    if (!logged){
        change_location('suggestions')
    }
}





window.onload = check_if_logged()

