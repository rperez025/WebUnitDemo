let trace01 = {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 6, 8, 10],
    type: 'bar'
}

let trace02 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 3, 5, 4, 8],
    type: 'bar'
}

let trace03 = {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 6, 8, 10],
    type: 'scatter'
}

let trace04 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 3, 5, 4, 8],
    type: 'scatter'
}

let data01 = [trace01, trace02]

let data02 = [trace03, trace04]


let layout01 = {
    title: 'Two Bar Charts!'
}

let layout02 = {
    title: 'Two Scatter Charts!'
}

Plotly.newPlot('plot01', data01, layout01);

Plotly.newPlot('plot02', data02, layout02);