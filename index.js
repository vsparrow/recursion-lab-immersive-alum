// Code your solution here!
//this works but is not recursive
let reverseString = (string)=>{
  string = string.split("")
  // console.log(parseInt(string.length/2));
  let start = 0
  let middle = ''
  string.length %2 == 0 ? middle = parseInt(string.length/2) : middle = Math.ceil(string.length/2)
  console.log(middle);
  let end = string.length
  // console.log(string);
  for(i=0;i<middle;i++){
    let temp = string[start]
    string[start]=string[end]
    string[end] = temp
    start++
    end--
    // console.log(`${string} : ${start} ${end}`)
  }
  return string.join("")
}



// let r_return = reverseString('pizza')
// let r_return = reverseString('abcd')
let r_return = reverseString('chocolate')
console.log(r_return)


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
