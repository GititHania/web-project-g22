function print_to_pay() {
    document.getElementById("to_pay").value = sessionStorage.getItem("final_cost")+" ₪"

}





window.onload = print_to_pay()