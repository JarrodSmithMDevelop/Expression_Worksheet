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
var slicesPer;              //Total number of slices per person

//Equations

var totalSlices = slicesPer * numPizzas;         //Equating total number of slices of pizza ordered.



//Output

console.log("Each person ate " + totalSlices / numPeople + " number slices of pizza.");      //Output the result to console.
