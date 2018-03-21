var button = document.getElementById("submit");
button.addEventListener("click", checkOrder);

/* Check which checkboxes where checked and show items in a list */
function checkOrder(event){
    event.preventDefault();
    
    var checkBox = document.getElementsByName("donut");
    var donuts = [];
    var list = "";
    var chosen = false;
    var cartList = document.getElementById("cart");
    var totalCost = document.getElementById("cost");
    var totalItems = 4;
    
    for(var i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked){
            chosen = true;
            var item = document.getElementById("qnt_"+i);
            donuts.push(checkBox[i].value);
            list += "<li>" + checkBox[i].value + " " + item.value + " st</li>";
        }
    }
    if(chosen){
        cartList.innerHTML = list; 
    }else{
        cartList.innerHTML = "Du måste välja minst en sort!";
        totalCost.innerHTML = "";
    }
}


button.addEventListener("click", checkForm);
/* Check the text inputs in the form, if empty show the warnings, if not, show the user data */
function checkForm(e){
    e.preventDefault();
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var tn = parseInt(document.getElementById("telefon").value);
    var em = document.getElementById("email").value;
    var warn = document.getElementById("warning");
    var user = document.getElementById("userInfo");
    var cartList = document.getElementById("cart");
    var totalCost = document.getElementById("cost");
    
    var empty = false;
    var fields = "";
    
    if(fn == null || fn == ""){
        empty = true;
        fields += "Du måste ange ditt förnamn!<br>";
    }
    if(ln == null || ln == ""){
        empty = true;
        fields += "Du måste ange ditt efternamn!<br>";
    }
    if(tn == null || tn == "" || isNaN(tn)){
        empty = true;
        fields += "Du måste ange ditt telefonnummer!<br>";
    }
    
    if(em == null || em == ""){
        empty = true;
        fields += "Du måste ange ditt e-post!<br>";
    }
    
    if(empty){
        warn.innerHTML = "Fyll i följande innan du går vidare:<br>" + fields;
        user.innerHTML = "";
        cartList.innerHTML = "";
        totalCost.innerHTML = "";
        return false;
    }
        
    user.innerHTML = "<h3> DINA UPPGIFTER: </h3>" + "<li>" + fn + " " + ln + "</li>" + "<li>" + tn + "</li>" + "<li>" + em + "</li>";
    warn.innerHTML = "";
    return true;
}

/* Calculate the total cost. If product is not checked, the cost will not be updated. */
function calc(){  
    var total = 0; 
    var totalItems = 4;
    var totalCost = document.getElementById("cost");
    var checkBox = document.getElementsByName("donut");
    
    for(var i = 0; i < totalItems; i++){
        var item = document.getElementById("qnt_"+i);
        if(checkBox[i].checked){
            total += parseInt(item.value) * parseInt(item.getAttribute("data-price"));  
        }
    }
    totalCost.innerHTML = total + " kr";
} 