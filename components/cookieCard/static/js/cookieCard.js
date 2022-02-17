function addCookie(id) {
    amount = document.getElementById("amount" + id).value;
    base = document.getElementById("base" + id).innerText;
    toping = document.getElementById("toping" + id).innerText;
    price = document.getElementById("price" + id).innerText.split(" ₪")[0];
    cookie = {
        'id': id,
        'base': base,
        'toping': toping,
        'price': price,
        'amount': amount
    }
    var key = 'c' + id;
    add_to_cart(key, cookie);
}


function addPack(id) {
    amount = document.getElementById("amountp" + id).value;
    size = document.getElementById("size" + id).innerText;
    price = document.getElementById("pricep" + id).innerText.split(" ₪")[0];
    pack = {
        'id': id,
        'size': size,
        'price': price,
        'amount': amount
    }
    var key = 'p' + id;
    add_to_cart(key, pack);
}

