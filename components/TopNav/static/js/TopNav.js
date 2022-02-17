
function toggle_side(side_id) {
    var side = document.getElementById(side_id);
    toggle_element_display(side);
    // make sure the others are hidden (so if you open the cart the menu should close)
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        if (sides[s] != side) {
            sides[s].style.display = "none";
        }
    }
    set_cart()
}

function toggle_element_display(elem) {
    pm = document.getElementById("pm-side")
    if (elem.style.display === "block") {
        if (pm) {
            pm.style.display = "none";
        }
        elem.style.display = "none";
    } else {
        if (pm) {
            pm.style.display = "block";
        }
        elem.style.display = "block";
    }
}
