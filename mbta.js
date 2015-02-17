// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// commented out for testing purposes:

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Starting at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line

var lines = {
  'green': ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
  'red': ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Park Street", "South Station"],
  'orange': ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts"]
};

var calcIndexDistance = function(line, station1, station2) {
  return Math.abs(lines[line].indexOf(station1) - lines[line].indexOf(station2));
};

var calcStops = function(originLine, origin, destinationLine, destination) {
  if (originLine === destinationLine) {
    return calcIndexDistance(originLine, origin, destination);
  } else {
    return calcIndexDistance(originLine, origin, "Park Street") + calcIndexDistance(destinationLine, destination, "Park Street");
  }
}

// tests:

startingLine = 'red';
startingStation = 'South Station';
endingLine = 'green';
endingStation = 'Copley';

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ", should be 4: " + calcStops(startingLine, startingStation, endingLine, endingStation));

startingLine = 'green';
startingStation = 'Haymarket';
endingLine = 'orange';
endingStation = 'Tufts';

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ", should be 6: " + calcStops(startingLine, startingStation, endingLine, endingStation));

startingLine = 'green';
startingStation = 'Haymarket';
endingLine = 'orange';
endingStation = 'North Station';

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ", should be 4: " + calcStops(startingLine, startingStation, endingLine, endingStation));

startingLine = 'green';
startingStation = 'Copley';
endingLine = 'orange';
endingStation = 'North Station';

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ", should be 5: " + calcStops(startingLine, startingStation, endingLine, endingStation));

startingLine = 'green';
startingStation = 'Copley';
endingLine = 'orange';
endingStation = 'Tufts';

alert("Starting at " + startingLine + " : " + startingStation + ", ending at " + endingLine + " : " + endingStation + ", should be 7: " + calcStops(startingLine, startingStation, endingLine, endingStation));
