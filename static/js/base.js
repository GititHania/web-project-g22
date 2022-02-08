var method;
var address;

function set_method(meth) {
    method = meth;
    if (method == "Del") {
        var city_value = document.getElementById("City").value;
        var street_value = document.getElementById("street").value;
        var house_value = document.getElementById("houseNum").value;
        if (city_value && street_value && house_value) {
            address = { City: city_value, Street: street_value, House: house_value }
            find_store(address);
            change_location('catalog');
        } else {
            alert("אנא מלא את פרטיך");
        }
    } else {
        change_location('catalog');
    }
}

function find_store(address) {
    // todo
    console.log("looking");
}

function change_location(new_loc){
    window.location.href = new_loc;
}

function close_popup() {
    document.getElementById("pm-popups").style.display = "none";
    var popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}


function open_popup(popup_id) {
    popup = document.getElementById(popup_id);
    popup.style.display = "inline-block";
    document.getElementById("pm-popups").style.display = "block";
}
