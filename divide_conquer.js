let list_of_numbers = [2,33,10,20,4];

function mergeTwoList(n) {
    let odd = [];
    let even = [];

    for (var i = 0; i < list_of_numbers.length; i++) {
        if (list_of_numbers[i] % 2 === 0)
            even.push(list_of_numbers[i])

        if (list_of_numbers[i] % 3 === 0)
            odd.push(list_of_numbers[i])
    }
    const conc = odd.concat(even);

    return conc;
}


console.log(mergeTwoList(list_of_numbers))