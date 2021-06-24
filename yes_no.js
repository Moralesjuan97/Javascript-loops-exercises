let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// let yesno = (number) => {
//         for (index in number){
//             if (number[index] === 1)
//                 return "wiki"
//             if (number[index] === 0)
//                 return "woko"
//         }
// }

var yesno = function (myNumber) {

    if (myNumber === 1)
        return ("wiki")
    if (myNumber === 0)
        return ("woko")

}

var newArray = theBools.map(yesno)
console.log(newArray)