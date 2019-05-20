var prices = ["10.99","11.99","12.00","10.99","14.99"];
var items = ["shroom burger","bacon cheese burger", "tuna burger", "chicken burger", "vegan burger"];

function addPrices(){
    for(var i = 0; i < 5; i++){
        var priceCount = "price"+ (i + 1);
        var colCell = document.getElementById(priceCount);
        colCell.innerHTML = prices[i];
    }
}

function addItemName(){
    var count = 0;
    while (count < 5){
        var itemCount = "item" + (count +1);
        var firstColCell = document.getElementById(itemCount);
        firstColCell.innerHTML = items[count];
        count++;
    }
}



function setupPage(){
    addPrices();
    addItemName();
}

window.addEventListener("load", setupPage, false);





