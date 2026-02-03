const arr1 = ['sbfvw','csibvbg'];
const arr2 = ['nbjlgnbm','dagvicfvl'];
const child = arr1.concat(arr2);
child
['sbfvw', 'csibvbg', 'nbjlgnbm', 'dagvicfvl']
const child2 = ['htisbadivnso','vsfigboue','bogithj'];
const grandchild = child.concat(child2);
grandchild
['sbfvw', 'csibvbg', 'nbjlgnbm', 'dagvicfvl', 'htisbadivnso', 'vsfigboue', 'bogithj']
const child3 = child.concat(arr1, arr2, child2);
child3
['sbfvw', 'csibvbg', 'nbjlgnbm', 'dagvicfvl', 'sbfvw', 'csibvbg', 'nbjlgnbm', 'dagvicfvl', 'htisbadivnso', 'vsfigboue', 'bogithj']
// Child 2 is created when we concat an array with an already concated array.
// Child 3 is created by concating multiple arrays
//we can concat arrays with multiple data types and the concated array would be considered as an object, but it would also maintain the datatypes of the array elements as it is!
let text = fruits.constructor;
const ages = [32, 33, 16, 40];
function checkAge(age){
    return age > 18;
}
ages.every(checkAge);
false
// every() method executes a function for each array element.
// every() method returns true if the function returns true for all elements.
// every() method returns false if the function returns false for one element.
const agess = [32, 33, 16, 40];
const result = agess.filter(checkAdults);
function checkAdults(age){
    return age >= 18;
}
result;
// filter() method creates new array filled with test passed elements provided by function.  this method doesn't execute func of empty elements.  it doesn't change original array.
