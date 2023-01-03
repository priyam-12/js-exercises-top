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

//EX:04 removeFromArray
function removeFromArray(array,element){
  //method 1
  for(let i=0;i<array.length-1;i++){
    if(array[i]===element){
      let temp=array[i];
      array[i]=array[i+1];
      array[i+1]=temp;
    }
  }
  array.pop();
  return array;
}

console.log(removeFromArray([1,2,3,4],3));

