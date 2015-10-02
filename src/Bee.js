// Refactor the Bee object to be a subclass of Grub using ES6
class Bee extends Grub {
  constructor(name) {
    super(name);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'keep on growing';
  }
  haveBirthday() {
    if(this.age <= 10) {
      setInterval(() => {this.age++;}, 1000);
    }
  }
}

  // Give Bee a method called haveBirthday that increases the age of Bee
  // by one each second and stops when Bee is 10 years old

