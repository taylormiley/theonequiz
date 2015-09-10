var Fruitmaker = function () {

  return {
    slices: function(fruit, slices) {
      var sliceArray = [];
      for (var i = 0; i < slices; i++) {
        sliceArray.push(fruit);
      }
      return sliceArray;
    }
  }
}();
console.log(Fruitmaker.slices("apple", 2));
