function calculatePower() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const result = Math.pow(number1, number2);
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculateFactorial() {
  const number1 = parseInt(document.getElementById('number1').value);
  let factorial = 1;
  for (let i = 1; i <= number1; i++) {
    factorial *= i;
  }
  document.getElementById('result').innerText = `Result: ${factorial}`;
}

function gcd(a, b) {
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function calculateGCD() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const result = gcd(number1, number2);
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculateLCM() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const gcdValue = gcd(number1, number2);
  const result = Math.abs(number1 * number2) / gcdValue;
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculatePrimeFactorization() {
  let number1 = parseInt(document.getElementById('number1').value);
  const factors = [];
  for (let i = 2; i <= number1; i++) {
    while (number1 % i === 0) {
      factors.push(i);
      number1 /= i;
    }
  }
  document.getElementById('result').innerText = `Result: ${factors.join(', ')}`;
}
function calculatePower() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const result = Math.pow(number1, number2);
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculateFactorial() {
  const number1 = parseInt(document.getElementById('number1').value);
  let factorial = 1;
  for (let i = 1; i <= number1; i++) {
    factorial *= i;
  }
  document.getElementById('result').innerText = `Result: ${factorial}`;
}

function gcd(a, b) {
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function calculateGCD() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const result = gcd(number1, number2);
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculateLCM() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const gcdValue = gcd(number1, number2);
  const result = Math.abs(number1 * number2) / gcdValue;
  document.getElementById('result').innerText = `Result: ${result}`;
}

function calculatePrimeFactorization() {
  let number1 = parseInt(document.getElementById('number1').value);
  const factors = [];
  for (let i = 2; i <= number1; i++) {
    while (number1 % i === 0) {
      factors.push(i);
      number1 /= i;
    }
  }
  document.getElementById('result').innerText = `Result: ${factors.join(', ')}`;
}

function sumOfDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function calculateAmicablePairs() {
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);
  const sum1 = sumOfDivisors(number1);
  const sum2 = sumOfDivisors(number2);

  if (sum1 === number2 && sum2 === number1) {
    document.getElementById('result').innerText = `Result: ${number1} and ${number2} are amicable pairs.`;
  } else {
    document.getElementById('result').innerText = `Result: ${number1} and ${number2} are not amicable pairs.`;
  }
}
