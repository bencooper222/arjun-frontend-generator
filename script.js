let lineGraph = document.getElementById('lineGraph');


function resetGraph() { // pass in input box
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let numPoints = document.getElementById('numPoints').value;

    let points = {};


    let generateRandInRange = function(min, max) {
        return Math.random() * (max - min) + min;
    }
    for (let i = 0; i < numPoints; i++) {
        points[generateRandInRange(min, max)] = generateRandInRange(min, max);
        //xVals.push(generateRandInRange(min, max));
        //yVals.push(generateRandInRange(min, max));
    }

    let xVals = Object.keys(points).sort();
    let yVals = [];

    for (let i = 0; i < xVals.length; i++) {
        yVals.push(points[xVals[i]]);
    }


    Plotly.plot(lineGraph, [{
        x: xVals,
        y: yVals
    }], {
        margin: { t: 0 }
    });

}