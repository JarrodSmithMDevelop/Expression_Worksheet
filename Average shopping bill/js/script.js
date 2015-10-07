/**
 * Jarrod Smith
 * SDI 1510 Section 1
 * Average weekly grocery bill
 * 10/5/15.
 */


//Variables


var wk1;                                                                //Week 1 total
var wk2;                                                                //Week 2 total
var wk3;                                                                //Week 3 total
var wk4;                                                                //Week 4 total
var wk5;                                                                //Week 5 total
var avgWeeks;
array = [wk1,wk2,wk3,wk4,wk5];
var total;

//Inputs

var wk1 = prompt("Enter the amount of your week 1 grocery bill.");
var wk2 = prompt("Enter the amount of your week 2 grocery bill.");
var wk3 = prompt("Enter the amount of your week 3 grocery bill.");
var wk4 = prompt("Enter the amount of your week 4 grocery bill.");
var wk5 = prompt("Enter the amount of your week 5 grocery bill.");

//Equations

var total = array[0] + array[1] + array[2] + array[3] + array[4];
var avgWeeks = total / 5;

//Output

console.log("Total amount spent on groceries " + "$ " + total + " over the past 5 weeks.");
console.log("Your average grocery bill for the past 5 weeks is " + avgWeeks )
