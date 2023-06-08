//@ts-check
const firstName = 'John';
const age = 35;
const myHobby = 'Coding';

/**
 *  this funcition will console log parameter aFunction twice
 * @param {*} aFunction - will be repeated twice by function 
 * @returns {void}
 */

const logTwice = (aFunction)=> {
    

  console.log(aFunction)
  console.log(aFunction)
}
 /**
  * this function produces a string using the info from above
  * @returns {string}
  */
function hobby () {
  return `Hello, ${firstName} (${age}). I love ${myHobby}!`
}

logTwice(hobby())