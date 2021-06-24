var arr = [];

function createMatrix(n) {
    for (var i = 0; i < n; i++) {
        arr.push([]);
        for (var j = 0; j < n; j++) {
            var random = Math.floor(Math.random() * 2);
            arr[i][j] = random
        }
    }
    return arr;
}
console.log(createMatrix(3));