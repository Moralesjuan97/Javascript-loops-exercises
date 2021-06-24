var myarray = ['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak'];

function deleteitem (array, person){
    for (var i = 0; i < array.length; i++){
        if (array[i] === person){
            array.pop(person)
        }
    }

    return array;
}

console.log(deleteitem(myarray,"daniella"));