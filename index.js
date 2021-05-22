// Write your solution in this file!
let employee = {
  name:'Nancy',
  streetAdress:'E Michigan Ave'
};


function updateEmployeeWithKeyAndValue(obj, key, val) {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
};
// function updateEmployeeWithKeyAndValue(obj, key, val) {
//   return Object.assign({}, obj, {key:val})

// };

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
};

function deleteFromEmployeeByKey(obj, key) {
  let newObj = {...obj};
  delete newObj[key];
  return newObj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
};







//  Once you've initialized the employee Object, you'll need to create the following four functions:

// updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.
// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
