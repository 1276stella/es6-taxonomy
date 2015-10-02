describe('RetiredForagerBee class functionality', function() {

  beforeEach(function() {
    retiredForager = new RetiredForagerBee();
  });

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `40`', function() {
    expect(retiredForager.age).to.equal(40);
  });

  it('should have a `job` property that is set to `gamble`', function() {
    expect(retiredForager.job).to.equal('gamble');
  });

  it('should have a `canFly` property that is set to `false`', function() {
    expect(retiredForager.canFly).to.equal(false);
  });

  it('should have a `color` property that is set to `grey`', function() {
    expect(retiredForager.color).to.equal('grey');
  });

  it('should have a `forage` method that returns "I am too old, let me play cards instead"', function() {
    expect(retiredForager.forage()).to.equal('I am too old, let me play cards instead');
  });

  /*  Inherited from superclass  */

  it('should have a `food` property that is inherited from grub', function() {
    expect(retiredForager.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', function() {
    expect(retiredForager.eat).to.be.a('function');
  });

  it('should have a `treasureChest` property inherited from foragerBee that is set to an empty array `[]`', function() {
    expect(retiredForager.treasureChest).to.be.a('array');
  });

  /*  New methods and properties  */

  it('should have an `addTreasures` method that takes multiple arguments and concats them to treasureChest', function() {
    retiredForager.addTreasures('Pollen chips', 'Lavender honey', 'Synthetic wax');
    expect(retiredForager.treasureChest).to.have.length(3);
  });

});
