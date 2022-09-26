// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// a) Create a test with an expect statement using the variable provided.


describe  ("grammar_bot" , () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      expect(grammar_bot(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// Good Failure
// FAIL  ./code-challenges.test.js
//   grammar_bot
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// ● grammar_bot › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//   ReferenceError: grammar_bot is not defined



// b) Create the function that makes the test pass.

// PseudoCode
// Create a function called "grammar_bot"
// This function will take in an array of objects enclosed in {} curly brackets.
// Expected outcome is an array of strings 
    // First thought based on the expected outcome's data type; we can create a .map method that returns a new array
    // To access the data value we want to modify we will have to use index notation (for the array section) and dot notation (for the obect section)
    // Modification Logic
        // Access data value as so: array[index].name
        // We are going to split the string at the empty space character like this: array[index].name.split(" ")
        // ... this creates another array we need to iterate through hmm
            //  We can make another .map method to iterate over this new array of strings
            //  To capitalize the first letter of each string from the name-key-array we use: array_name.charAt(0).toUpperCase()
            //  Connecting the capitalize letter to the whole word in name we use: array_name[index].charAt(0).toUpperCase() + array_name[index].substring(1)
            // use .join to combine the name
            //  We use type coercion to combine the name and the occupation key value data




// First attempt

// const grammar_bot = (array) => {

    // The first .map gives us access to keys

//   return array.map ( (value => {

    // Right below we have ["ford", "perfect"] for the first iteration; using another map access a specific key name and capitalize it + type coercion

//     value.name.split(" ").map( (full_name) => {

       //  first part is F, second part is ord for the first iteration
       //  in the end we get [Ford, Perfect] for the first iteration

//       return full_name.charAt(0).toUpperCase() + full_name.substring(1) 

       // we are going to use .join(" ") to make the complete name for the first iteration "Ford Perfect"
       // We use string interpolation to make the complate sentence.
      // the first array element should be "Ford Perfect is a hitchhiker." and the other elements should look correct too.

//     }).join(" ") + ` is ${value.occupation}.`
//   })
//  )}
//  ... return placements are off :( 





// Second Attempt -- DONE!
// const grammar_bot = (array) => {
//   return array.map ( (value => {
//     return value.name.split(" ").map( (full_name) => {
//       return full_name.charAt(0).toUpperCase() + full_name.substring(1) 
//     }).join(" ") + ` is ${value.occupation}.`
//   })
// )}

// Success!!!
// PASS  ./code-challenges.test.js
// grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.446 s, estimated 1 s







// Refactored; utilizing single line syntax sugars DONE!!!! ; it looks really confusing... but it works just the same!!
const grammar_bot = (array) => { return array.map(value => value.name.split(" ").map(full_name => full_name.charAt(0).toUpperCase() + full_name.substring(1)).join(" ") + ` is ${value.occupation}.`)}

// Success!!!!
// PASS  ./code-challenges.test.js
// grammar_bot
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.436 s
// Ran all test suites matching /code-challenges.test.js/i.












// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// a) Create a test with an expect statement using the variables provided.


describe  ("organized" , () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      expect(organized(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(organized(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// Good Failure
// FAIL  ./code-challenges.test.js
// grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// organized
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// ● organized › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//   ReferenceError: organized is not defined






// b) Create the function that makes the test pass.
// PseudoCode
// Create a function called organized
// Will take in an array of mixed data types
// Only the number data type will procede into the modification phase
// The expected out put will just be an array of numbers 
    // Modification Logic 
    // Create a decision tree that will accept the data type of numbers, will simply use: typeof (parameter)
      // We can scratch off writing a decision tree if we use a .filter method instead which is bulit in
      //  ===> the .filter or for loop will organize the data types, only taking the numbers 
      // then we must do another for loop or a .map to execute our desired modification 
      // Then we just use modulo % 3 to produce the number; luckily!!!! the remainder by default can be either postive or negative, so no other actions are needed 
      // ... remember to put the return keywords!!!





// Attempt 1 DONE!!!
  // const organized = (array) => {
  //   return array.filter( (nums_only) => {
  //    return typeof nums_only === "number"
  //   }).map( (math) => {
  //      return math % 3
  //   })
  // }

// Success!!!
//  PASS  ./code-challenges.test.js
//   grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// organized
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.427 s, estimated 1 s





// Refactoring... looks a little bit nicer!!
const organized = (array) => {return array.filter(nums_only => typeof nums_only === "number").map( (math) => math%3)}

// WOW!! Success!!
// PASS  ./code-challenges.test.js
// grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// organized
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.338 s, estimated 1 s
// Ran all test suites matching /code-challenges.test.js/i.










// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// a) Create a test with an expect statement using the variables provided.

describe  ("cube_sum" , () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      expect(cube_sum(cubeAndSum1)).toEqual(99)
      expect(cube_sum(cubeAndSum2)).toEqual(1125)
  })
})


// Good Failure
// FAIL  ./code-challenges.test.js
// grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)
// organized
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// cube_sum
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed.
// ● cube_sum › takes in an array of numbers and returns the sum of all the numbers cubed.
//   ReferenceError: cube_sum is not defined


// b) Create the function that makes the test pass.
// PseudoCode
// Create a function called cube_sum
// Will take in an array as a parameter
// Will output a single number 
  // Modification
  // Simply cube the number ** 3 to get the cube
  // And use a container varible to store the accumulative sum as: math_solver = math_solver + array[index]
      // We can use a .map or a for loop; but a for loop might be better... as a .map produces an array. 




// Hm the testing suite is stalling, it doesn't seem to like that we put a return sum on line 288... ;
// First Attempt Fail...
// const cube_sum = (array) => {
//   let sum = 0
// for (let index= 0; index = array.length; index = index + 1) 
//   sum = sum + array[index]
//   return sum
// }



// After some research there are a .reduce method and a "lodash library to sum"; but lodash looks a bit werid... so i'll ignore that
// Referenced: https://www.delftstack.com/howto/javascript/javascript-sum-of-array/#:~:text=Use%20the%20for%20Loop%20to%20Sum%20an%20Array%20in%20a%20JavaScript%20Array,-The%20for%20loop&text=We%20can%20use%20it%20to,log(sum)%3B

// PseudoCode
// Create a function called cube_sum
// Will take in an array as a parameter
// Will output a single number 
  // Modification
  // Simply cube the number ** 3 to get the cube; using a .map method to do this; we also have to store this too so add another container varible
  // A containter varible is needed to store the sum
  // **** To add the sum of a previous element IN AN ARRAY!!! to the succeeding element array we will use the method called reduce; 
      // .reduce()
      // The notation looks like this: .reduce((arbitrary_name_for_previous_element, arbitrary_name_for_current_element) => arbitrary_name_for_previous_element + arbitrary_name_for_current_element, container_varible)

      // Do note that the math operation in this case "+" can be change to whatever math operation needed


//  Second Attempt DONE!!!!
const cube_sum = (array) => {
  let sum = 0
  let cubed_array = array.map( (value) => {
   return value ** 3
  })
  return cubed_array.reduce((previous, current) => previous + current, sum )
}

// I could refactored too, it would just remove 2 extra lines though

// Success!!!!!
// PASS  ./code-challenges.test.js
// grammar_bot
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (4 ms)
// organized
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// cube_sum
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.456 s, estimated 1 s
// Ran all test suites matching /./i.
// ✨  Done in 1.18s.


