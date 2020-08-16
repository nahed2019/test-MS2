
// selecte city function

function selectCity(){
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
    let persons = document.getElementById("inputNoOfPersons").value;
    let days = document.getElementById("inputNoOfdays").value;
    console.log(persons);
    console.log(days);
    //let result = parseInt(citySelected)*parseInt(hotelSelected)*parseInt(persons)*parseInt(days);
   // getElementById("CalculateTheCost").value= result;
}




/*function calculate(){

let city = document.glementById("inputcity").selected;
let hotel = document.getElementById("inputHotel").selected;
let persons = document.getElementById("inputNoOfPersons").value;
let days = document.getElementById("inputNoOfdays").value;
let guide = document.getElementById("guideCheck").value;

let result = (parseFloat(city) * parseFloat(hotel) * parseFloat(persons) * parseFloat(days)) + parseFloat(guide);


}*/