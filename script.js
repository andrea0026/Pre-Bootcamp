function pickscala(element){
    var value = element.options[element.selectedIndex].value;
    var tempH = document.querySelectorAll("h4");
    var tempL = document.querySelectorAll("h5");

    var tempCel4 = ["24°","27°","21°","26°"]
    var tempCel5 = ["18°","19°","16°","21°"]
    var temFar4 = ["75°","80°","69°","78°"]
    var temFar5 = ["65°","66°","61°","70°"]
    
    if (value == "°F"){
        for (var i = 0; i < tempH.length; i++) {
            var item = tempH[i];
            item.innerHTML = temFar4[i]
        }
        for (var i = 0; i < tempL.length; i++) {
            var item = tempL[i];
            item.innerHTML = temFar5[i]
        }
    }
    else{
        for (var i = 0; i < tempH.length; i++) {
            var item = tempH[i];
            item.innerHTML = tempCel4[i]
        }
        for (var i = 0; i < tempL.length; i++) {
            var item = tempL[i];
            item.innerHTML = tempCel5[i]
        }
    }
}

function alerta(element){
    alert("Loading weather report...");
    document.getElementById("ciudad").innerHTML = element.innerHTML;
}
function hide() {
    var element = document.querySelector("cookies");
    element.remove();
}