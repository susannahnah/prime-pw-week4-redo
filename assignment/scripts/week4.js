console.log('hello world!');

//created empty array
let parkedCars = [];

//created max number of cars allowed
const maxCars = 27; 


//create function that allows for random
//car to be parked up to 27 total
function parkCar(randomCar){
  if(parkedCars.length < maxCars) {
    parkedCars.push(randomCar);
  return true;
  }
  else {
    return false;
  };
}

//test function
console.log(parkedCars);

parkCar('Honda Accord');
parkCar('Tesla');
parkCar('BMW 5-Series');
