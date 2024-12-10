function findMinMax(arr) {
  return arr.reduce(
    (acc, curr) => {
      return {
        max: curr > acc.max ? curr : acc.max,
        min: curr < acc.min ? curr : acc.min,
      };
    },
    { max: -Infinity, min: Infinity }
  );
}

const numbers = [3, 7, 2, 8, -1, 4, 10, -5];
const result = findMinMax(numbers);
console.log(`Maximum: ${result.max}, Minimum: ${result.min}`);
