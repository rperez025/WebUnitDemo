// Array of books
let books = ["Why I am Afraid of Bees", "The Cuckoo Clock of Doom",
"It Came from Beneath the Sink"];

// Array holding the number of times Dr. A read those books
let timesRead = [5, 3, 10];

// Set up the plotly plot
// Set up the trace information
let trace = {
    x: books,
    y: timesRead,
    type: 'bar'
}

// Set up the data list of traces
let data = [trace];

// Set up the layout 
let layout = {
    title: "Dr. A's Children's Thriller Book Reads"
}

// Call on Plotly
Plotly.newPlot('plot', data, layout);

