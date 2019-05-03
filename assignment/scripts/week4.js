console.log( 'js' );
let parkedCars = [];
//created empty array
const maxCars = 27;
//created max number of cars allowed
let freeSpace = true;

function parkCar(randomCar){
  if (parkedCars.length < maxCars ){
    parkedCars.push(randomCar);
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
