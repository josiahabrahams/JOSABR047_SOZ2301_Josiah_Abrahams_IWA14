const firstName = 'John';
const age = 35;
const myHobby = 'Coding';

const logTwice = (aFunction)=> {
    

  console.log(aFunction)
  console.log(aFunction)
}

function hobby () {
  return`Hello, ${ firstName} (${age}). I love ${myHobby}!`
}

logTwice(hobby())