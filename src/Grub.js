// Refactor the Grub class using ES6 syntax
class Grub {
  // constructor() gets called when a new Grub() is created
  constructor(name="Barry B. Benson") {
    this.name = name;
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  // Give the parameter of 'eat' a default value and don't forget to use string interpolation
  eat(adjective="gross") {
    return `Mmmmmmmmm ${this.food} is really ${adjective}`;
  }
};
