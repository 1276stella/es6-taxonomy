Taxonomy in ES2015
============

![](http://i.imgur.com/qrLEV.gif)

### Taxonomy! (again)

Your job for this sprint will be to take your old, stale ES5 taxonomy
code and refactor it using the new [standardized ECMAScript 2015 syntax.]
(https://leanpub.com/exploring-es6/read) ES2015 (or ES6 as it is
unofficially called) was ratified as JavaScript standard syntax in June
2015 and will soon be fully supported by all modern browsers. You can
track which features are supported by each browser [here]
(https://kangax.github.io/compat-table/es6/).
Though native support for ES2015 is currently limited, there are ways to take advantage of the many time-saving features of ES2015 today by using a transpiler.

### ECMAScript 2015

The official ECMAScript 2015 language specification is available [here](http://www.ecma-international.org/ecma-262/6.0/). [Exploring ES6](https://leanpub.com/exploring-es6/read) by Axel Rauschmayer offers a much more readable introduction to the language. The second chapter of Kyle Simpson's [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md) also provides a great overview of the new features and their syntax.

Here's a quick look at the ES2015 syntax/features you'll be exploring during this sprint.

#### let

let is another way to declare variables that will behave in a slightly different manner than those declared with var. As you know, a variable declared with var is contained within the scope of the function in which it was declared. let allows you to declare a variable that is confined to the scope of a block. The example below demonstrates the scope of a let declared variable.

```
function func() {
    if (true) {
        let tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
}
```

#### Classes and Constructors

The ES6 class syntax doesn't really provide new functionality; rather, it provides a more explicit and convenient syntax for creating class constructor functions and setting up prototype changes (for inheritance). Below is a class and subclass.

```
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}
```

#### String Templating

String templating (aka string interpolation) allows you to access a variable directly within a string. This saves you from having to close and open strings while concatenating variables. To use a string template, you must wrap your string with backticks (\` \`) and then you can interpolate your variable by wrapping it within `${stringVariable}.

```
function tempExample = function() {
  let name = 'Brendan Eich';

  return `The original developer of JavaScript is named ${name}.`
}
```

#### Arrow Functions

Arrow functions provide a quick, convenient syntax for declaring anonymous functions. For better or worse, they also introduce a new rule for binding `this.

```
function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        return this.prefix + x;
    });
};
```
Specifying parameters
```
    () => { ... } // no parameter
     x => { ... } // one parameter, an identifier
(x, y) => { ... } // several parameters
```

#### Parameter Handling

Default parameter values can be set where the parameters are defined in a function.
```
function findClosestShape(x=0, y=0) {
    // ...
}
```
is equivalent to
```
function findClosestShape(x, y) {
    let x = x || 0;
    let y = y || 0;
    // ...
}
```
The spread operator can be used to turn iterable values into arguments
```
let myArray = [1, 2, 3];
someFunc(...myArray);

function someFunc(a, b, c) {
  a === 1; // true
  b === 2; // true
  c === 3; // true
}
```
Similarly, the rest operator will take any remaining parameters and store them in an array
```
function f(x, ...y) {
    // ···
}
f('a', 'b', 'c'); // x = 'a'; y = ['b', 'c']
```
Think of rest parameters as a new, more convenient version of `arguments.


### Transpiling ES6 with Babel

[Babel](http://babeljs.io/) is a JavaScript compiler that allows you to
write code in ES2015 syntax and then convert (or transpile) it into ES5
code that can be understood by all current browsers. To use Babel, you'll
need to install it globally using `npm install babel -g` You can then
write your code in a normal .js file using ES2015 syntax and when you're
ready to run your app, you must transpile your code using the command
`babel originalFile.js --out-file compiledFile.js` You can also [compile
entire directories and set up source maps](http://babeljs.io/docs/usage/cli/). Read more about source maps [here](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

## Basic Requirements

Revisit the original Taxonomy sprint, this time writing your solution in ES2015 syntax. During this sprint you'll have a chance to explore classes and subclasses, let, arrow
functions, default parameters, string interpolation, and for-of loops. There are
many more features and keywords that have been added to ECMAScript but these are
some good basics to get started.

### Things to Note

Because Babel will transpile your code into regular ES5 syntax, all of your tests
found in `test/index.html` will pass after you refactor your code. Pay attention to where the tests expect your transpiled code to be stored (HINT: take a look at how the source files are loaded in `test/index.html`)

Keep in mind that ES2015 doesn't replace ES5, it extends it. You could easily get the tests to pass without exploring ES2015's new features; we've included some prompts in the form of comments in the provided code to ensure that you're using all of the features ES2015 has to offer.

### Class Structure

    .
    ├── Grub
    │   └── Bee
    │       ├── HoneyMakerBee
    │       └── ForagerBee
    │          └── RetiredForagerBee

As you can see in the diagram above, all bees start out as a Grub, grow into Bees and are then assigned their specific jobs and tasks among other charactersitics. This means that characteristics are inherited from the classes above (although they can be modified on the current class level).

#### Grub
- [ ] Create a Grub class using the ES2015 class syntax, with
  - [ ] a `constructor`
  - [ ] a `name` property that is set to the argument passed in when creating a new Grub
  - [ ] a `name` property that is set to "Barry B. Benson" by default
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method that returns a string that contains the `food` property and the argument passed to the `eat` method
  - [ ] the `eat` method should have a default parameter value of 'gross' and use string interpolation for the return value

#### Bee
- [ ] Create a Bee class using ES2015 class syntax with:
  - [ ] `super` to extend the the Grub superclass
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `job` property that is set to `keep on growing`
  - [ ] a `haveBirthday` method that starts an interval that ages the bee by one each second until the bee is 10, then the interval should end
  - Remember to use the let keyword and arrow functions in your haveBirthday method

#### HoneyMakerBee
- [ ] Create a HoneyMakerBee class using ES2015 syntax with:
  - [ ] `super` to extend the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a job property that is set to `make honey`
  - [ ] a color property inherited from `bee` that is set to `yellow`
  - [ ] a food property that is inherited from grub
  - [ ] an eat method that is inherited from grub
  - [ ] a `honeyPot` property that is set to `0`
  - [ ] a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot
  - [ ] a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot

#### ForagerBee
- [ ] Create a ForagerBee class using ES2015 syntax with:
  - [ ] `super` to extend the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a `job` property that is set to `find pollen`
  - [ ] a `color` property inherited from `bee` that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `canFly` property that is set `true`
  - [ ] a `treasureChest` property that is set to an empty array `[]`
  - [ ] a `forage` method that allows the bee to add a `treasure` to the `treasureChest`
  - [ ] a `getAllTreasures` method that returns a concatenated string of every item in the `treasureChest`
  - Remember to use a `for-of` loop on your array as well as the let keyword to keep your loop variable only in the scope where you actually need it. This is also another opportunity to use string interpolation.

#### RetiredForagerBee
- [ ] Create a RetiredForagerBee class using ES2015 syntax with:
  - [ ] `super` to extend the ForagerBee superclass
  - [ ] an `age` property that is set to `40`
  - [ ] a `job` property that is set to `gamble`
  - [ ] a `canFly` property that is set to `false`
  - [ ] a `color` property that is set to `grey`
  - [ ] a `forage` method that returns "I am too old, let me play cards instead"
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `treasureChest` property inherited from ForagerBee that is set to an empty array `[]`
  - [ ] an `addTreasures` method that is passed multiple arguments that are concatenated to `treasureChest`. Use the ES2015 `rest` syntax here

## Extra Credit
- [ ] Explore some of the other ES2015 features:
  - [ ] Learn about `destructuring` and create a method on HoneyMakerBee that utilizes it. MDN has a good overview [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - [ ] Look into the new data structures, [Maps and Sets](http://www.2ality.com/2015/01/es6-maps-sets.html), available in ES2015 and refactor `treasureChest` to take advantage of them.
  - [ ] There are a number of new Math functions available in ES2015; familiarize yourself with them by reading through the *Numbers and Math Features* section of [*Exploring ES6*](https://leanpub.com/exploring-es6/read)
  - [ ] Now that you have a grasp on the major new features of ES2015, refactor underbar to use the new functionality of the most recent JavaScript standard. There are a number of opportunities to make your code more compact and readable with the new syntax.
  - [ ] Learn about [Grunt](http://gruntjs.com/) and use it to transpile your ES2015 code automatically (check out [grunt-babel](https://github.com/babel/grunt-babel)).
