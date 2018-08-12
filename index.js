// Code your solution here!
// let count = 0

function maxOf(array){
  if(array.length == 1) {return array[0]}
  if(array[0] > array[array.length-1]){array.pop();return maxOf(array)}
  else{array.shift(); return maxOf(array)}
}
// console.log(maxOf([1, 10, 5, 13]));

function addUpTo(array,limit){
  // console.log(`${array} ** ${limit}`);
  // if(limit == 1){return array[0]+ array[1]}
  if(limit == 0){return array[0]}
  // return array[0] + addUpTo(array.splice(0,1),--limit)
  return parseInt(array.splice(0,1)) + addUpTo(array,--limit)
}
// console.log  (addUpTo([2, 4, 5, 3], 2))


function isPalindrome(string){
  if (string.length == 1) {return true}
  if (string[0] != string[string.length-1]) {return false}
  // console.log(count++);
  return isPalindrome(string.substring(1,string.length-1))
  // return "default"
}
//
// console.log(isPalindrome("madamimadam"))
// console.log(isPalindrome("cool"))
// console.log(isPalindrome("I"))







let reverseString = (string, start=null,middle=null,end=null)=>{
  if(middle==null){ //beginning
    start = 0
    string.length %2 == 0 ? middle = parseInt(string.length/2) : middle = Math.ceil(string.length/2)
    end = string.length-1
    console.log(string);
  }
  // else if(start == middle){
  //   return string
  // }
  string = string.split("")
  let temp = string[start]
  string[start]=string[end]
  string[end] = temp
  start++
  end--
  string = string.join("")
  console.log(`${string} : ${start} ${middle} ${end}`)
  if(start == middle){
    return string
  }
  return reverseString(string, start,middle,end)

}
//this works but is not recursive
// let reverseString = (string)=>{
//   string = string.split("")
//   // console.log(parseInt(string.length/2));
//   let start = 0
//   let middle = ''
//   string.length %2 == 0 ? middle = parseInt(string.length/2) : middle = Math.ceil(string.length/2)
//   console.log(middle);
//   let end = string.length
//   // console.log(string);
//   for(i=0;i<middle;i++){
//     let temp = string[start]
//     string[start]=string[end]
//     string[end] = temp
//     start++
//     end--
//     // console.log(`${string} : ${start} ${end}`)
//   }
//   return string.join("")
// }



// let r_return = reverseString('pizza')
// let r_return = reverseString('abcd')
// let r_return = reverseString('chocolate')
// console.log(r_return)


// let count = 1
let printString = (string)=>{
  // console.log(count);
  // count ++
  console.log(string[0]);
  if(string.length > 1){
    printString(string.substring(1,string.length))
  }
  else {return true}

}


// printString("hello")
