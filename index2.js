var sayHello = name => `Hello ${name}`

var printHello = (name) => {
  console.log(`Hello ${name}`)
};

var getSiblings = n => ({ previus: n -1, next: n+1 }) 

console.log(sayHello('Quirino'));
console.log(printHello("Milton"));
console.log(getSiblings(4))