//상속

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

class Bicycle extends Vehicle {
  constructor(name, wheel, color) {
    super(name, wheel);
    this.color = color;
  }
}
