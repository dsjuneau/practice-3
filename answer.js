console.log(log1("first"));

// The function declaration (function statement) defines a function with the specified parameters.

function log1(a) {
  console.log(a);
  return a;
}

// Here is an example of an anonymous function expression (the name is not used):

const log2 = function (a) {
  console.log(a);
  return a;
};

// Arrow functions are always anonymous can be written in more concise ways.
const log3 = (a) => {
  console.log(a);
  return a;
};

const log4 = (a) => a; // () only needed if you have more than 1 argument and if there is only one statement, then that is returned

// It is also possible to provide a name inside the definition in order to create a named function expression:
// This can be a valuable tool when debugging.

const log5 = function logIt(a) {
  console.log(a);
  return a;
};

console.log(log2("second"));
console.log(log3("third"));
console.log(log4("fourth"));
console.log(log5("fifth"));

// Function declarations are hoisted.  This means you call call the function before it is defined.
// Function expressions are not hoisted.  This means the variable is hoisted, but the function itself is not hoisted.
