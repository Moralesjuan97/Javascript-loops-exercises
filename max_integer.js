
var my_array = [2,5,6,8,10,22,50];

function biggest_num(arr){
    let placeholder = 0;

    for (var i=0;i<arr.length;i++){
        if (arr[i] > placeholder)
        placeholder = arr[i];
    }

    return placeholder
}

console.log(biggest_num(my_array))