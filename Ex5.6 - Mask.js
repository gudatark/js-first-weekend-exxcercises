const maskify = (info) => {
    let fourSaved = info.slice(-4) // put a negative number within the parameters so it starts from backwards. This variable will save the last 4 characters of the string.
    const infoArr = info.split(", ") //turned string into an array for easier manipulation
    for(let i = 0; i < infoArr.length; i++){
        infoArr[i] =infoArr[i].replace(/[a-zA-Z]/g, '#') //so each and every element in the array is changed into a #
    }
    let arrStr = infoArr.join(''); //Changing array back to string
    let masked = arrStr.slice(0, -4) + fourSaved;
    return masked 
  }
  console.log(maskify("hello world")) //desired output should be: ##### #orld