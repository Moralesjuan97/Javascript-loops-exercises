let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

var onlyRs = function(names){
    return names.charAt(0) === 'R';
}

var newArray = allNames.filter(onlyRs);

console.log(newArray);