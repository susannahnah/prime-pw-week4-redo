let parkedCars = [];
//created empty array
const maxCars = 27;
//created max number of cars allowed

function parkCar(randomCar){
  //defining the name of our function
  if (parkedCars.length < maxCars )
  //looking at garage space
  {
    parkedCars.push(randomCar);
    //pushing random car into garage if space
    return true;
  }
  else{
    return false;}
}

console.log( parkedCars );
parkCar( 'PT Cruiser' );
parkCar( 'Truck' );
parkCar( 'Honda' );
parkCar( 'Jeep' );
console.log(parkCar( 'Caddy' ));
