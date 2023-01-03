//EX:01 helloWorld program
console.log("Hello world!");

//EX:02 repeatString
function repeatString(string,num){
  let newString="";
  for(let i=0;i<num;i++){
    newString+=string;
  }
  return newString;
}

console.log(repeatString("lo",4));
