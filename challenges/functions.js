// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(object1, object2, callback) {
  return callback(object1, object2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting (firstname, lastname) {
  return `Hello first-name last-name, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: By adding Kingdom to the end of myFunction and City to nestedFunction I am giving the idea that the city is in the kindgom, the kingom has access to the city, but once in the city you are blocked from leaving, without the return keyword; not listed.  Therefore even heard to leave.  Nestedfuction() is able to acces the variable internal because it is still nested inside the Kingdom. Kingdom is surrounding the nestedFunctionCity() because of it's clouser brackets { }. In short, the city is inside the kingom and can be called within the kingdom's walls or brackets in this case. Outisde of those brackets it would not work. 


const external = "I'm outside the function";

function myFunctionKingdom() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunctionCity() {
    console.log(internal);
  };
  nestedFunctionCity();
}
myFunctionKingdom();