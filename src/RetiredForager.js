// Refactor RetiredForagerBee to be a subclass of ForagerBee using ES6 syntax


  // RetiredForagerBee should have an addTreasures method that takes multiple
  // arguments that get added to treasureChest use the rest operator here and
  // concat the passed items onto treasureChest

class RetiredForagerBee extends ForagerBee {
  constructor(name) {
    super(name);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage(){
    return `I am too old, let me play cards instead`;
  }
  addTreasures(...args) {
    for (let i = 0; i < args.length; i++) {
      this.treasureChest.push(args[i]);
    }
  } 
}