//EX:01 helloWorld program
console.log("Hello world!");

//EX:02 repeatString
function repeatString(string,num){
  if (num < 0) return 'ERROR';
  let newString="";
  for(let i=0;i<num;i++){
    newString+=string;
  }
  return newString;
}

console.log(repeatString("lo",4));

//EX:03 reverseString
function reverseString(string){
  //method 1
  // return string.split('').reverse().join('');

  //method 2
  let temp=[];
  for(let i=string.length-1;i>=0;i--){
    temp[i] = string [string.length-i-1];
  }
  return temp.join("");
}

console.log(reverseString("hello brother"));
