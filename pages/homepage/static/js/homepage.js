function find_location() {
    if (window.navigator.geolocation) {
        const denied_access = a => {
            alert("לא ניתן למצוא את המיקום שלך...\n אנא הכנס מקום");
            make_address_editable()
        }
        const successfulLookup = position => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=278323ccecb64c7dbaeac9385784430c`)
                .then(response => response.json()
                    .then(read_response));
        }
        window.navigator.geolocation.getCurrentPosition(successfulLookup, denied_access);
    } else {
        alert("לא ניתן למצוא את המיקום שלך...\n אנא הכנס מקום");
        make_address_editable()
    }
}

function remove_spaces(str) {
    return (str.replace(/\s/g, ''))
}

function set_store(sel_id, sub) {
    var storeID = document.getElementById(sel_id).value;
    sessionStorage.setItem("storeID", storeID);
    document.getElementById("storeID").value = storeID;
    close_popup("choose_store");
    if (sub){
        document.getElementById("address_form").submit();
    }
}

function set_method(meth) {
    console.log(storesList)
    document.getElementById("meth_inp").value = meth;
    sessionStorage.setItem("method", meth)
    if (meth == "Del") {
        var city_value = document.getElementById("City").value;
        var street_value = document.getElementById("street").value;
        var house_value = document.getElementById("houseNum").value;
        find_store(city_value);
        if (city_value && street_value && house_value) {
            address = { 'City': city_value, 'Street': street_value, 'House': house_value }
            address['storeID'] = find_store(address);
            sessionStorage.setItem("address", JSON.stringify(address))
            document.getElementById("address_form").submit();
        } else {
            alert("אנא מלא את פרטיך");
        }
    } else {
        open_popup("choose_store_sp");
    }
}


function read_response(res) {
    var loc = res.results[0].formatted;
    console.log(loc);
    if (loc) {
        var locs = loc.split(",");
        document.getElementById('street').value = locs[0];
        document.getElementById('City').value = locs[1].replace(/\s+/g, '').replace(/[0-9]/g, '');  // "clean" the city from numbers and white spaces
    }

}

function make_address_editable() {
    var form = document.getElementById("address_form");
    var inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = false;
    }

}

window.onload = find_location();
