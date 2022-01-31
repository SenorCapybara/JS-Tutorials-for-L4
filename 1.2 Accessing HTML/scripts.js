

//invoice example
/*
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = subtotal+shipping;

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total.toFixed(2)}`;
*/

function CalculateCost(){
    var sign = document.getElementById("user").value;
    var length = sign.length;
    
    var shipping = 0;
    //Increase shipping on higher cost!
    if(length > 30){
        document.getElementById("error").innerHTML= "Signs must be less than 30 characters!";
    }
    else if (length > 15  && length <= 30){
        shipping = 14.99;
    }
    else{
        shipping = 4.99;
    }
    var subtotal = length * 2.99;
    var total = subtotal+shipping;
   
    document.getElementById("userSign").innerHTML= sign;
    document.getElementById("userSign").innerHTML= sign;
    document.getElementById("tiles").textContent = length;
    document.getElementById("subtotal").textContent = `£${subtotal}`;
    document.getElementById("shipping").textContent = `£${shipping}`;
    document.getElementById("total").textContent = `£${total.toFixed(2)}`;
}

function Test(){
    alert("HellO!");
}