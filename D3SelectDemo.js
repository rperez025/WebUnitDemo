// This example uses D3 in a SELECT context - access information from
// tags in the HTML file

// use .select() to get some information from a class (recall, class references uses .name)
// get information from a class named .text1
let text1 = d3.select('.text1')
console.log(text1);
// use .text() to get the actual text content from the tag
text1 = d3.select('.text1').text();
console.log(text1);

// use .select() to get some information from an id (id references use #name)
let text2 = d3.select('#text2');
console.log(text2)
text2 = d3.select('#text2').text()
console.log(text2)

// we can also use .text to change the content in a class or id as well
d3.select('.text1').text('This class has a new message');

// to get the HTML content for a class, use .html()
let myLink = d3.select('.my-link').html()
console.log(myLink);

// myLink has the anchor tag ('a' tag) content. To get that anchor tag content, do the following:
let myLinkA = d3.select('.my-link>a');
console.log(myLinkA)

// to get the href from the anchor tag using the .attr function
let href = myLinkA.attr('href');
//let hostName = myLinkA.attr('host');

console.log(href);
//console.log(hostName);

// change the link for the href
myLinkA.attr('href', 'https://www.google.com');

href = myLinkA.attr('href');
//let hostName = myLinkA.attr('host');

console.log(href);

// to change the text associated with the link (that was for D3)
myLinkA = d3.select('.my-link>a').attr('href', 'https://www.google.com').text('Go to Google');


// add an item to the ul
let newItem = d3.select('ul').append('li');
newItem.text('New Item Added using D3');

// can also make more streamlined by performing the following:
let anotherItem = d3.select('ul').append('li').text('ANOTHER NEW ITEM!!!');

/* BOOTSTRAP TABLE */

// use D3 to select the table
let table = d3.select('table');

// change the type of table to a striped table (use "table-striped")
table.classed('table-striped', true);

// add new data to the table
let newStudent = ['James', 78];

// use the table reference to add a row to the table
let tableBody = d3.select('tbody');

// we will make a row -> then append a td for name, and a td for the grade
let row = tableBody.append('tr');

row.append('td').text(newStudent[0]);
row.append('td').text(newStudent[1]);

/* EVENTS IN D3 */
// get a reference to a button to handle events
let button01 = d3.select('#clickMe');

// specify action for when the button is clicked
/*function handleClicks(event) // event is some kind of action
{
    // specify any type of action we desire to occur
    console.log('You clicked the button!!');
    // tell what triggered the action
    console.log(event.target);
}

// attach the function to the button with the event
button01.on('click', handleClicks); // when the 'click' occurs on the button, it is passed
                                    // as an event when handleClicks is run
*/

// use the .this operator on the button (and all buttons)
// to tell what was clicked
d3.selectAll('button').on('click', function(){
    console.log(this);
});

/*
    use the 'this' operator to tell what list item (li) was clicked
    and change the color of the list item after it was clicked
*/
d3.selectAll('li').on('click', function(){
    console.log(this);

    // use d3 select to select the list item that was clicked and change the color
    let clickedItem = d3.select(this);
    clickedItem.style('color', 'red');
});

/* use d3 selects to increment the yay and nay counts in the HTML file */
// Yay button has the 'id' of yay
// Nay button has the 'id' of nay
// Yay counter has the class of yays
// Nay counter has the class of nays

// connect to the counters
let yayCounter = d3.select('.yays');
let nayCounter = d3.select('.nays');

// add the action for the yay counter
d3.select('#yay').on('click', function(){
    let button = d3.select(this);
    // make a variable that holds what is coming from the yay counter
    let currentYayCount = parseInt(yayCounter.text());
    // add one to the yay count
    currentYayCount += 1;
    // update the value of the yay counter
    yayCounter.text(currentYayCount);
});

// add the action for the nay counter
d3.select('#nay').on('click', function(){
    let button = d3.select(this);
    // make a variable that holds what is coming from the nay counter
    let currentNayCount = parseInt(nayCounter.text());
    // add one to the nay count
    currentNayCount += 1;
    // update the value of the nay counter
    nayCounter.text(currentNayCount);
});