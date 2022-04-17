function tribonacci(signature,n){  
    for (let i = 0; i < n-3; i++) { // iterate n times
    console.log(i)
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    
      console.log(signature)
    }
    return signature.slice(0, n); //return trib - length of n
  }
  console.log(tribonacci([1,2,3],10))