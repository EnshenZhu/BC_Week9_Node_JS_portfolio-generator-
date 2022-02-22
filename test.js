let four = 'four: outside the block';

if (true === true) {
  four = 'four: inside the block'; // notice: we don't redeclare the variable
  console.log(four); // prints 'four: inside the block'
}

console.log(four); // prints