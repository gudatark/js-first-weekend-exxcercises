function fibonacci(n) {
    let firstNum = 0;
    let secondNum = 1;
    let sum = 0;

    for (let i = 0; i <= n - 2; i++) {
      sum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = sum;
    }

    return sum;
  }
  console.log(fibonacci(8)); //21