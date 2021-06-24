var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

var initialValue = 0;
var stopValue = 0;
var increasingValue = 1;

for(var i = mySampleArray.length/2; i<mySampleArray.length; i = i + increasingValue)
{
	console.log(mySampleArray[i]);
}

console.log("----------------")

let mySampleArray2 = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

for (var i = mySampleArray2.length-1; i >= 0; i-- ){
	console.log(mySampleArray2[i]);
}