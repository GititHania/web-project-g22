function print_summery(){
    method = sessionStorage.getItem("method");
    if (method){
        var total_cost = parseInt(sessionStorage.getItem("total_cost"))
        if ( method == "del"){
            document.getElementById("as_sp").style.display == "none";
            del_cost.innerText = store.del_cost;
        } else {
            document.getElementById("as_del").style.display == "none";
        }    
    }
    else {
        open_popup("no_method");
    }
    

}

window.onload = print_summery()