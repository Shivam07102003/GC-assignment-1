function q3() {
  var coinFlip;

  for (var i = 1; i <= 10; i++) {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
}
