// to set up our plot using plotly, do the following:

// 1. Make an object taht will hold the trace data (your x and y data)
let trace = {
    x: xValues,
    y: yValues
}

// 2. Put the trace data into an array
let data = [trace];

// 3. Set the layout information for the plot
let layout = {
    title: "A plotly plot"
}

// 4. Call Plotly.newPlot() and pass in the id for the plot, the data, and the layout
// information
Plotly.newPlot('plot', data, layout);