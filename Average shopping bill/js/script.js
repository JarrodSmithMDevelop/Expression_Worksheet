/**
 * Jarrod Smith
 * SDI 1510 Section 1
 * Average weekly grocery bill
 * 10/5/15.
 */


//Variables


var wk1 = 237;                                                                //Week 1 total
var wk2 = 347;                                                                //Week 2 total
var wk3 = 298;                                                                //Week 3 total
var wk4 = 175;                                                                //Week 4 total
var wk5 = 231;                                                                //Week 5 total
var avgWeeks;
array = [wk1,wk2,wk3,wk4,wk5];
var total;


//Equations

var total = array[0] + array[1] + array[2] + array[3] + array[4];
var avgWeeks = total / 5;

//Output

console.log("Total amount spent on groceries " + "$ " + total + " over the past 5 weeks.");
console.log("Your average grocery bill for the past 5 weeks is " + avgWeeks )
