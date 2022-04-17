const basicmath = function (thecode, value1, value2) {
    if (thecode === `+`) {
      return value1 + value2;
    }
    else if (thecode === `-`) {
      return value1 - value2;
    }
    else if (thecode === `/`) {
      return value1 / value2;
    }
    else if (thecode === `*`) {
      return value1 * value2;
    }
  }
  
  console.log(basicmath('+', 4, 7));
  console.log(basicmath('-', 15, 18));
  console.log(basicmath('*', 5, 5));
  console.log(basicmath('/', 49, 7));