function yesOrNo(booleanValue){
    if(typeof booleanValue=="boolean"){ 
         return booleanValue==true ?"Yes" : "No";
    }
    else
     return "The params is not boolean";
}
let result=yesOrNo(false); console.log(result); result=yesOrNo(true); console.log(result); result=yesOrNo(6); console.log(result);

/** toam answer
 function yesOrNo(booleanValue){
if(typeof booleanValue!=="boolean"){
const error=`param can be ${typeof booleanValue}`;
console.log(error);
return error;
}
return booleanValue?"Yes":"No";
}
//let result=yesOrNo(false);
console.log(result);
result=yesOrNo(true);
console.log(result);
result=yesOrNo(60>20);
console.log(result);
*/