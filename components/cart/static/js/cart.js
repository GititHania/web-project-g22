function save_loc() {
    document.getElementById("loc").value =  window.location.pathname
}

window.onload = save_loc()