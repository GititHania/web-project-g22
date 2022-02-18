function print_summery() {
    method = sessionStorage.getItem("method");
    if (method) {
        var d = 0;
        var total_cost = parseInt(sessionStorage.getItem("total_cost"))
        if (method == "Del") {
            document.getElementById("as_sp").style.display = "none";
            del_cost.innerText = store.del_cost;
            d = 1;
            var address = JSON.parse(sessionStorage.getItem("address"))
            if (address){
                document.getElementById("ad_city") = address.City;
                document.getElementById("ad_street") = address.Street;
                document.getElementById("ad_num") = address.House;

            }
        } else {
            document.getElementById("as_del").style.display = "none";
            d = 0;
        }
        var cost = total_cost - (parseInt(points) / 10) + parseInt(store_del_cost) * d;
        document.getElementById("tot_cost").innerText = cost
        sessionStorage.setItem("final_cost", cost)
    }
    else {
        open_popup("no_method");
    }
    if (document.getElementById("signin")) {
        open_popup("signin");
    }

}

window.onload = print_summery()