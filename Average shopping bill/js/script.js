/**
 * Jarrod Smith
 * SDI 1510 Section 1
 * Average weekly grocery bill
 * 10/5/15.
 */


//Variables

var wk1;            //Week 1 grocery bill
var wk2;            //Week 1 grocery bill
var wk3;            //Week 1 grocery bill
var wk4;            //Week 1 grocery bill
var wk5;            //Week 1 grocery bill
var avgWeeks;       //Average of all 5 weeks
var total;          //Total of all 5 weeks

//Input

wk1 = Number(prompt("Enter the amount of your week 1 grocery bill."));      //Week 1 grocery bill input
wk2 = Number(prompt("Enter the amount of your week 2 grocery bill."));      //Week 2 grocery bill input
wk3 = Number(prompt("Enter the amount of your week 3 grocery bill."));      //Week 3 grocery bill input
wk4 = Number(prompt("Enter the amount of your week 4 grocery bill."));      //Week 4 grocery bill input
wk5 = Number(prompt("Enter the amount of your week 5 grocery bill."));      //Week 5 grocery bill input
array = [wk1,wk2,wk3,wk4,wk5];

//Equations

var total = array[0] + array[1] + array[2] + array[3] + array[4];       //Array of all grocery bills
var avgWeeks = total / 5;                                               //The average of all 5 weeks

//Output

console.log("Total amount spent on groceries " + "$ " + total + " over the past 5 weeks."); //Output to the console to give the total
console.log("Your average grocery bill for the past 5 weeks is " + avgWeeks );      //Output to the console to get the average
