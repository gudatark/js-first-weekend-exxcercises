const binaryToNumber = arr => {
    return parseInt(arr.join(""), 2);
  };

 console.log(binaryToNumber([0, 1, 1, 0]));
 console.log(binaryToNumber([1, 1, 1, 1]));