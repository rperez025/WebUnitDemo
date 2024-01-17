// Charlotte's Coordinates = 35.2271° N, 80.8431° W

let myMap = L.map("map", {
    center: [35.2271, -80.8431],
    zoom: 4
});

// add a tile layer - map image at the coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

// to add a marker, use L.Marker and give the marker some information
let marker = L.marker(
    [35.2271, -80.8431], {
        title: "Hello From Charlotte!"
    }
).addTo(myMap);

// bind a popup to the marker (makes it clickable)
marker.bindPopup("You clicked the Charlotte Marker!");

// An array containing each city's name, location, and population
let cities = [{
    location: [40.7128, -74.0059],
    name: "New York",
    population: 8550405
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: 2720546
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: 2296224
  },
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: 3971883
  },
  {
    location: [41.2524, -95.9980],
    name: "Omaha",
    population: 446599
  }
  ];

  // loop through the array of cities
  for (var i = 0; i < cities.length; i++)
  {
    // get each city from the array and do the following:
        // use the location property
        // make a marker using the location
        // bind a popup to the marker that has the city name and population
            // with embedded HTML
    let city = cities[i];   // gets the current city
    L.marker(city['location'], {title: city['name']})
    .bindPopup(`<center><h2>${city['name']}</h2><hr><p>Population: ${city['population']}</p></center>`)
    .addTo(myMap);
  }