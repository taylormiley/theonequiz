var Fruitmaker = function () {

  var fruits = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function() {
      return fruits;
    },
    addFruit: function(fruit) {
      return fruits.push(fruit);
    }
  }
}();
Fruitmaker.addFruit("bacon");
console.log(Fruitmaker.getFruits());



