/*  
    DEBUGGING : Defect or problem in program that cause unexpected behaviour.
    Debugging can be done using,
    1) Deveoloper console: Use console.log() or console.table() to debug.
    2) Debugger: 
        Inspect page. 
        Go to source.
        Open file in which defect is present.
        Add breakpoints and execute program.
        Check if value for varible are correct.
        Use step and resume button.
        Improve code and Debug again ;)

*/
'use strict';

const printForcast = function (tempArr) {
  let forcastString = '...';
  for (
    let day = 0;
    day < tempArr.length; // change it to day < tempArr and then debug
    day++
  ) {
    forcastString += ` ${tempArr[day]}^C in ${day + 1} days ...`;
  }
  return forcastString;
};

console.log(printForcast([17, 23, 21]));
