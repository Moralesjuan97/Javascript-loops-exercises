let myarray = [1, 0, 0,1,1,1, 0, 1, 1, 0, 1, 1, 1]
let song = '';
var count = 0;

function lyricsgenerator(numbers) {
    for (index in numbers) {
        if (numbers[index] === 1) {
            song += " Boom ";
            count++
        }
        if (numbers[index] === 0) {
            song += " Drop the base ";
            count *= 0
        }
        if (count === 3) {
            song += " Break the base!!!! "
            count *= 0;
        }
    }
    return song;
}

console.log(lyricsgenerator(myarray))