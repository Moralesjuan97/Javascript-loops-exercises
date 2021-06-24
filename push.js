
var arr = [4,5,734,43,45];

for (var i = 0; i < 10; i++){

    var randomnum = Math.floor(Math.random()*10);
    console.log(randomnum);
    arr.push(randomnum);
}


console.log(arr);
