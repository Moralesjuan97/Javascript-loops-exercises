let parking_state = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 2]
]

function getParkingLotState(anArray) {
    var totalslot = 0;
    var availableslot = 0;
    var occupiedslots = 0;
    
    for (var i = 0; i < anArray.length; i++) {
        var inside = anArray.length;
        for (var j = 0; j < inside; j++) {
            var spot = anArray[i][j]
            if (spot === 1)
                occupiedslots++;
            if (spot === 2)
                availableslot++;
            totalslot++;
        }
    }

    return {
        occupied: occupiedslots,
        total: totalslot,
        available: availableslot
    };


}

console.log(getParkingLotState(parking_state))