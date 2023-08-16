function myEach(collection, callback) {
    
    let objArr = collection;
    if (typeof(collection) === 'object') {
        objArr = Object.values(collection);
    } 

    for (const item of objArr) {
        callback(item);
    }

    return collection;
}

function myMap(collection, callback) {

    let objArr = collection;
    if(typeof(collection) === 'object') {
        objArr = Object.values(collection);
    }

    let newArr = [];
    for (const item of objArr) {
        newArr.push(callback(item));
    }

    return newArr;
}

function myReduce(collection, callback, acc) {
    
    let objArr = collection;
    if(typeof(collection) === 'object') {
        objArr = Object.values(collection);
    }

    let total = 0;
    if (acc !== undefined) {
        total = acc;
    } else {
        total = objArr[0];
        // remove 0th element from array to get correct end sum
        objArr = objArr.slice(1);
    }
    
    for (const val of objArr) {
        total = callback(total, val, objArr);
    }

    return total;
}

function myFind(collection, predicate) {

    let objArr = collection;
    if(typeof(collection) === 'object') {
        objArr = Object.values(collection);
    }

    for (const val of objArr) {
        if (predicate(val) === true) {
            return val;
        } else {
            continue;
        }
    }  
}

function myFilter(collection, predicate) {

    let objArr = collection;
    if(typeof(collection) === 'object') {
        objArr = Object.values(collection);
    }

    let filterArr = [];
    for (const val of objArr) {
        if(predicate(val) === true) {
            filterArr.push(val);
        }
    }

    return filterArr;
}

function mySize(collection) {

    let objArr = collection;
    if(typeof(collection) === 'object') {
        objArr = Object.values(collection);
    }

    let ctr = 0
    for (const value of objArr) {
        ctr += 1;
    }

    return ctr;
}

function myFirst(array, n) {

    if (n === undefined) {
        return array[0];
    } else {
        let firstN = [];
        for (let i = 0; i < n; i++) {
            firstN.push(array[i]);
        }
        return firstN;
    }
}

function myLast(array, n) {

    if(n === undefined) {
        return array.slice(-1)[0];
    } else {
        let lastN = [];
        for (let i = array.length - n; i < array.length; i++) {
            lastN.push(array[i]);
        }
        return lastN;
    }
}

function mySortBy(array, callback) {

    let newObj = {};
    for (const val of array) {
        const key = callback(val);
        // if key exists, implicitly add val to values array
        if (newObj[key]) {
          newObj[key].push(val);
        // else create key-value pair, with value inside an array
        } else {
          newObj[key] = [val];
        }
    }

    let sortedKeys = [];
    // check value in values array, sort as number else sort as string
    if (typeof(Object.values(newObj)[0][0]) === 'number') {
        sortedKeys = Object.keys(newObj).sort((a, b) => a - b);
    } else {
        sortedKeys = Object.keys(newObj).sort();
    }
    
    let sortedArr = [];
    for (const key of sortedKeys) {
        // push all values stored in values array using spread operator
        sortedArr.push(...newObj[key]);
    }
    
    return sortedArr;
}

function myKeys(object) {

    let newArr = [];
    for (let item in object) {
        newArr.push(item);
    }
    return newArr;
}

function myValues(object) {

    let newArr = [];
    for (let item in object) {
        newArr.push(object[item]);
    }
    return newArr;
}

//mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) });
//const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//mySortBy(stooges, function(stooge){ return stooge.name });
//const unsortedStringArr = ["maru", "choux", "doge", "coconut"];
//mySortBy(unsortedStringArr, function(val){ return val });
//mySortBy([3, 8, 5, 1, 9, 11, 8], function(val){ return val });
