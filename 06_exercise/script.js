// Write a function called *weekNumberstoWords* with given given input array of numbers 1-7 
// and outputs an array of the weeksdays written out, using a switch.

// Input: an array of numbers 1 -7  e.g [1,4,6,3,2]
// Output: an array of the matching weekdays ["Monday","Thursday","Saturday","Wednesday","Tuesday"]
// Process:  interate each element in an array and check each element and store matching weekday in a new list

//Contraint : 
// input is given as array
// input array should contain the number between 1 and 7
// switch should be used

// Test Cases
    // array is empty e.g. [] -> []
    // array contains only one element e.g. [1]-> ["Monday"] 
    // array contains all different elements [1,4,6,3,2] -> ["Monday","Thursday","Saturday","Wednesday","Tuesday"]
    // array contains multiple same elements [1, 4, 1, 4]-> ["Monday","Thursday","Monday","Thursday"]

// PSEUDO CODE 
// SATRT 
//     Initialize the output list
//     IF array is empty return empty array
//     ELSE
//        Interate an array
//           check each element using a switch and store the matching weekdays into a output list
//     Return output list
// END

function weekNumberstoWords(weeknum) {
    let weekdays = [];
    if (weeknum.length == 0) {
        return weekdays;
    }
    else {
        for (let i = 0; i < weeknum.length; i++) {
            switch(weeknum[i]) {
                case 1:
                    weekdays.push("Monday");
                    break;
                case 2:
                    weekdays.push("Tuesday");
                    break;
                case 3:
                    weekdays.push("Wednesday");
                    break;
                case 4:
                    weekdays.push("Thursday");
                    break;
                case 5:
                    weekdays.push("Friday");
                    break;
                case 6:
                    weekdays.push("Saturday");
                    break;
                case 7:
                    weekdays.push("Sonday");
                    break;
            }
        }
        return weekdays;
    }
}

// Test Cases Check
// console.log(weekNumberstoWords([]));
// console.log(weekNumberstoWords([1]));
// console.log(weekNumberstoWords([1,4,6,3,2]));
// console.log(weekNumberstoWords([1,4,1,4]));
