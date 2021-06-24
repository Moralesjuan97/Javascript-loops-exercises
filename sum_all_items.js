

function sumall(n) {
    var total = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
    }
    return total;
}
console.log(sumall([2, 2, 2]));