/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
<<<<<<< HEAD
  // Your code here
  if (obj[key]) return true

  else return false

=======
  
  if(obj[key]) console.log(true)
 else console.log(false)
>>>>>>> f634a623b8c4072b1fa088214ebdf23171115d2a
}
let obj1 = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
