//Input: s an array contains string e.g. [banana, apple, kiwi]
//Output: last element in a array e.g. kiwi
//Process: sort the array and return the last element

//Constraint:
// 1. an array is given as an input
// 2. no white space 
// 3. string is written in lowercase

//Test Cases : 
    // empty array - > empty string "", 
    // array contains only one element -> 1 element,
    // array contains all different elements -> last element,
    // array contains mixing elements -> last element


//PSEODO CODE
// START 
//     if the array is empty,  return empty String
//     else if the array has one element, simply return the element
//     else sort the array and return the last element
// END

function getFirstValue(arr) {
    let l = arr.length;
    if (l == 0) {
        return "";
    } else if (l == 1) {
        return arr[0];
    } else {
        arr.sort();
        return arr[l-1];
    }
}

//Test Case Check
// console.log(getFirstValue([""]));
// console.log(getFirstValue(["banana"]));
// console.log(getFirstValue(["banana", "kiwi", "apple"]));
// console.log(getFirstValue(["banana", "kiwi", "apple", " banana", "kiwi"]));

