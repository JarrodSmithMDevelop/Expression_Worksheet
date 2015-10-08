/**
 * Jarrod Smith
 * SDI 1510 Section 1
 * Slice of pie Part 2
 * 10/5/15.
 */


var slicesPer = 10;         //Amount of slices per pizza
var numPeople = 14;         //Amount of people who are attending the party.
var numPizzas = 10;         //The total amount of pizzas ordered.
var totalSlices;            //Total amount of slices of pizza.
var spikesPizza;            //Total number of slices spike gets
var slicesPerPerson;        //Total number of slices per person

//Equations

var totalSlices = slicesPer * numPizzas;         //Equating total number of slices of pizza ordered.
var spikesPizza = totalSlices % numPeople;       //The amount of slices that spike will get.
var slicesPerPerson = parseInt(totalSlices / numPeople);

//Output

console.log("Each person ate " + slicesPerPerson + " number slices of pizza.");      //Output the result to console.
console.log("The amount of pizza spike will get " + spikesPizza + ".");              //Output to show how many slices spike gets.