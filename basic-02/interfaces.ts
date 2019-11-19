interface Vehicle {
  name: string; 
  year: number; 
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};


const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken} 
    `
  );
}