// Refactor HoneyMakerBee to be a subclass of Bee using ES6 syntax

class HoneyMakerBee extends Bee {
  constructor(name) {
    super(name);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }

}

