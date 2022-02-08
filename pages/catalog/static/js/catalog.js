function close_side() {
    var sides = document.getElementsByClassName("hidden_side");
    for (let s = 0; s < sides.length; s++) {
        sides[s].style.display = "none";
    }
    document.getElementById("pm-side").style.display = "none";
}