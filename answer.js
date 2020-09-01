console.log(log1("first"));

// The function declaration (function statement) defines a function with the specified parameters.

function log1(a) {
  console.log(a);
  return a;
}

// Here are two examples of anonymous function expressions (the name is not used):

const log2 = function (a) {
  console.log(a);
  return a;
};

// Arrow functions are always anonymous can be written in more concise ways.
const log3 = (a) => {
  console.log(a);
  return a;
};

// It is also possible to provide a name inside the definition in order to create a named function expression:
// This can be a valuable tool when debugging.

const log4 = function logIt(a) {
  console.log(a);
  return a;
};

console.log(log2("second"));
console.log(log3("third"));
console.log(log4("fourth"));

// Function declarations are hoisted.  This means you call call the function before it is defined.
// Function expressions are not hoisted.  This means the variable is hoisted, but the function itself is not hoisted.
