function findUniq(arr) {

    var b= arr[0];
    var c;
    for(var i=0; i<arr.length; i++)
    { 

      if(arr[i]===b )
      {
         b=arr[i]

         }
     else

       {
       c=arr[i];
  }
}
return c
};
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));


  