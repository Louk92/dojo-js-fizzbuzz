const fizzBuzz = (nombre) => {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {
      console.log("fizzbuzz");
  } else if (nombre % 3 === 0) {
    console.log("fizz");
  } else if (nombre % 5 === 0) {
    console.log("buzz") ;
  } else {
    console.log(nombre)
  }
}

console.log(8)
console.log(fizzBuzz(12))
console.log(fizzBuzz(10))
console.log(fizzBuzz(30))

module.exports = fizzBuzz;
