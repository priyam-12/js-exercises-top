//EX:01 helloWorld program
console.log("Hello world!");
//================================
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
//=================================
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
//===================================
//EX:04 removeFromArray
// function removeFromArray(array,element){
//   //method 1
//   for(let i=0;i<array.length-1;i++){
//     if(array[i]===element){
//       let temp=array[i];
//       array[i]=array[i+1];
//       array[i+1]=temp;
//     }
//   }
//   array.pop();
//   return array;
// }

//method 2
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

console.log(removeFromArray([1,2,3,4],3));
//=====================================
