describe('Grub class functionality', function() {

  beforeEach(function() {
    grub = new Grub();
  });

  it('should take a string as an argument and set that to the `name` property', function() {
    grub = new Grub('Buzz');
    expect(grub.name).to.equal('Buzz');
  })
  it('should have a `name` property that is set to "Barry B. Benson" by default', function() {
    expect(grub.name).to.equal('Barry B. Benson');
  });

  it('should have an `age` property that is set to `0`', function() {
    expect(grub.age).to.equal(0);
  });

  it('should have a `color` property that is set to `pink`', function() {
    expect(grub.color).to.equal('pink');
  });

  it('should have a `food` property that is set to `jelly`', function() {
    expect(grub.food).to.equal('jelly');
  });

  it('should have an `eat` method', function() {
    expect(grub.eat).to.be.a('function');
  });

  it('should have an `eat` method that takes a string as an argument', function() {
    expect(grub.eat('yummers')).to.equal('Mmmmmmmmm jelly is really yummers');
  });

  it('should return the string "Mmmmmmmmm jelly is really gross" when eat() is called with no arguments', function(){
    expect(grub.eat()).to.equal('Mmmmmmmmm jelly is really gross');
  });

});
