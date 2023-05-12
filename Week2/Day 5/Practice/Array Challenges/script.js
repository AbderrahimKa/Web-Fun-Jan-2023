/*------------Excercice 1------------*/
function alwaysHungry(arr) {
    var temp = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log("Yummy");
            temp++;
        }
    }
    if (temp > 0) {
        console.log("I am Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*--------------------------------------------------*/

/*------------Excercice 2------------*/
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

/*--------------------------------------------------*/

/*------------Excercice 3------------*/
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);// we expect back 4

/*--------------------------------------------------*/

/*------------Excercice 4------------*/
function reverse(arr) {
    var temp;
    var j = arr.length - 1;

    for (var i = 0; i < arr.length; i++) {
        if (j > i) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

/*--------------------------------------------------*/

/*------------Excercice 5------------*/

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2;i<n;i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]