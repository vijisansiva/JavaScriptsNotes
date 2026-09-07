class Car {
   
    #checkEngine() {
        console.log("Checking engine...");
    }
     start() {
    this.#checkEngine();
        console.log("Car started");
    }

}

const car = new Car();

car.start();
car.checkEngine()
