/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting(name) {
  if (typeof name === "string") {
    return "Hello " + name + "!"
  } else {
    return false
  }
}


/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting(name) {
  return "Hello " + name + "!"
}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
function incrementGlobalCount(val) {
  return global.globalCount() + val
}

// :(((

/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply(firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum
}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}
