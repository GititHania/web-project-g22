function print_to_pay() {
    document.getElementById("to_pay").value = sessionStorage.getItem("final_cost")+" ₪"

}


function save_order(){
    alert("קיבלנו את ההזמנה ובקרוב מאוד תוכל להתענג על עוגית טעימות וחמות!")
}


window.onload = print_to_pay()