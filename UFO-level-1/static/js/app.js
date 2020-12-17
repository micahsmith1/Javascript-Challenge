// from data.js
var tableData = data;

// Code that appends a table to you web page 
// and adds new rows of data for each UFO sighting

// Reference to the table body 
var tbody = d3.select("tbody");
let table = d3.select("table");

// Loop through each ufo object in the data array 
tableData.forEach((item) => {
    let row = tbody.append("tr");
    let date = row.append("td");
    let city = row.append("td");
    let state = row.append("td");
    let country = row.append("td");
    let shape = row.append("td");
    let duration = row.append("td");
    let comments = row.append("td");

    date.text(item.datetime)
    city.text(item.city);
    state.text(item.state);
    country.text(item.country);
    shape.text(item.shape);
    duration.text(item.duration);
    comments.text(item.comments);

});

// Code that will listen for events 
// and search through the date/time column to find rows that match user input

// Select the submit button 
var button = d3.select("#filter-btn");

// Select the form 
var form = d3.select("#form")

/// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by datetime
    var results = tableData.filter(item => item.datetime === inputValue)
    
    // Clear out current contents in the table
	tbody.html("");
    
    // Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");

    let newData = tableData.filter(item => item.datetime === dateTime)

    tbody.selectAll("tr").data(newData).enter().append("tr").html(function(item) {
        return `<td>${item.datetime}</td>
        <td>${item.city}</td>
        <td>${item.state}</td>
        <td>${item.country}</td>
        <td>${item.shape}</td>
        <td>${item.duration}</td>
        <td>${item.comments}</td>
        `
    });
};





