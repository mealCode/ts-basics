const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

interface Vehicle {
  name: string; 
  year: number; 
  broken: boolean
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken} 
    `
  );
}