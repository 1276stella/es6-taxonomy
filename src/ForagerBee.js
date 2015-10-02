// Refactor ForagerBee to be a subclass of Bee using ES6 syntax
class ForagerBee extends Bee {
  constructor(name){
    super(name);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
  getAllTreasures(){
    let result = '';
    for(let i of this.treasureChest) {
      result += `${i} `;
    }
    return result;
  }
}

  // Give ForagerBee a method called getAllTreasures that loops through treasureChest
  // and returns a concatenated string of all items separated by a space

