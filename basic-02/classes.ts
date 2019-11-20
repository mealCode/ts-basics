  class Vehicle {
    constructor(public color: string) {}
    // protected method can only be called within the child class
    protected honk(): void {
      console.log('Beep Beep');
    }

  }

  const vehicle = new Vehicle('black');
  console.log(vehicle.color);


  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color) // referring to the parent class (vehicle) constructor
    }

    // private method only accessible within the Car class
    private drive(): void {
      console.log('Broom Broom');
    }

    // a public method can be called outside the class
    public startDrivingProcess(): void {
      this.drive();
      this.honk();
    }
  }

  const car = new Car(4, 'red');

  car.startDrivingProcess();
