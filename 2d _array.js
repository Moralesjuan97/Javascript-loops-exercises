var coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

for (var i = 0; i < coordinatesArray.length; i++) {
        var inner = coordinatesArray[i].length;
    for (var j = 1; j < inner; j++){
            var el = coordinatesArray[i][j]
            console.log(el)
    }
    
}

