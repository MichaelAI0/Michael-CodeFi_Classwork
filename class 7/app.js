/////=====Exercise One=====\\\\\\\
/*

function redundantReturn(str) {
  
  function inner() {
    return str
  }
return inner()
};

redundantReturn("Code");
const myVariable = redundantReturn("Code")
console.log (myVariable())

*/
////////=====Exercise Two======\\\\\\\\\\
/*
function parent(x) {
  
  return function closure() {
    
    return x;
  };
}

const remember = parent("remembers me");

// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure();
// Returns "remembers me" because the inner
// function remembers x.
*/

/////=======Practice====\\\\\\\

function greeting(greeting) {
  return function hammerTime(name) {
  return `${name}! ${greeting}`;
  };
 }

 const basicWelcome = greeting("Welcome.");
const friendlyWelcome = greeting("So glad to see you again!");

console.log( basicWelcome("John"));
console.log( friendlyWelcome("John"));