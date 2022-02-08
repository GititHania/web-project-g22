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
