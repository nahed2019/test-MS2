
// selecte city function
let citySelected;
let hotelSelected;
function selectCity() {
let city = document.getElementById("inputcity");
let citySelected = city.options[city.selectedIndex].value;

console.log(citySelected);

}

function selectHotel(){
let hotel = document.getElementById("inputHotel");
let hotelSelected = hotel.options[hotel.selectedIndex].value;

console.log(hotelSelected);

}


function calculate(){
    var persons = document.getElementById("inputNoOfPersons").value;
    var days = document.getElementById("inputNoOfdays").value;
    var result = parseFloat(persons) * parseFloat(days) * parseFloat(hotelSelected) * parseFloat(citySelected);
    console.log(persons);
    console.log(days);
    console.log(result);
document.getElementById("CalculateTheCost").innerHTML= result;
    }




