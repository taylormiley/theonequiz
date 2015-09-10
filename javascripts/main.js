// 7
var question7String = "This content generated with vanilla JavaScript.";

document.getElementById("vanilla_output").innerHTML = question7String;

// 8
var question8String = "This content generated with jQuery.";

$('#jquery_output').append(question8String);

// FUNCTIONS AND OPERATORS
function modulus(x, y) {
  return x % y;
}
console.log(modulus(10, 3));

function doMath(x, y, z) {
  return z(x, y);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(doMath(10, 3, add));
console.log(doMath(10, 3, subtract));

// ARRAYS
var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function sortedPlanets(a) {
  return a.sort();
}
console.log(sortedPlanets(Planets));

function reversedPlanets(a) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    var reversed = a[i].split("").reverse().join("");
    newArray.push(reversed);
  }
  a = newArray;
  return a;
}
console.log(reversedPlanets(Planets));

function longPlanets(a) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].length >= 7) {
      var longPlanet = a[i];
      newArray.push(longPlanet);
    }
  }
  a = newArray;
  return a;
}
console.log(longPlanets(Planets));

// XHR

function getAnimals(){
  $.ajax({
    url: "data/animals.json"
  }).done(function(data){
    console.log(data.animals);
  });
}

getAnimals();

