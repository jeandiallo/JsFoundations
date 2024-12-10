function primeNumber(num) {
  if (num > 1 && num / 1 === num && num / num === 1) {
    console.log("Got ourselves a prime number");
  } else {
    console.log("Got nothing");
  }
}
primeNumber(1);
