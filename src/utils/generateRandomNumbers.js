export function generateRandomNumbers(number) {
  const min = 100,
    max = 500,
    result = [];

  for (let i = 0; i < number; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
  }

  return result;
}

export function calculatePercentage(numbers, total) {
  const percetageArray = [];

  numbers.forEach((number) => {
    const percentage = Math.round((number / total) * 100);
    percetageArray.push(percentage);
  });

  return percetageArray;
}
