function repeater(string) {
    return string.split("").map(function(char) {
      return char.repeat(2);
    }).join("");
  }
  repeater("Hello") // => "HHeelloo"

  console.log('answer1',repeater("Hello"));

// way - 2
  function repeater(string) {
    let stringArr = string.split("")
    let result = [];
    for (let i=0; i < stringArr.length; i++) {
      result.push(stringArr[i] + stringArr[i])
    }
    return result.join("")
  }
  
  repeater("Hello") // => "HHeelloo"
  console.log('answer2',repeater("Hello"));