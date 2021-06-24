var array = [0, 0, 1, 1, 0];
var newarr = [];

for (var i = 0; i < array.length; i++) {
    if (array[i] === 1)
        newarr.push(1)
    else
        newarr.push("Yahoo")
}

console.log(newarr);

let myArray = [1, 0, 0, 0, 1, 0, 0, 0, 1, 1];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item, index) => {
        if (item[i] === 1)
            return_array.push(1)
        else
            return_array.push("Yahoo")
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));