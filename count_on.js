let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, {
    "name": "juan"
}];

var hello = [];

for (let index = 0; index < myArray.length; index++) {
    let item = myArray[index];

    if (typeof (item) === "object") {
        hello.push(item);
    }

}

console.log(hello);