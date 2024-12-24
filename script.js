function createTable() {
    //Write your code here
	
  // Prompt the user for the number of rows and columns
  let numRows = prompt("Input number of rows");
  let numCols = prompt("Input number of columns");

  // Convert the input values to integers
  numRows = parseInt(numRows);
  numCols = parseInt(numCols);

  // Get the table element by its ID
  let table = document.getElementById("myTable");

  // Clear any existing content in the table
  table.innerHTML = "";

  // Create the table rows and columns
  for (let i = 0; i < numRows; i++) {
    // Create a new row
    let row = document.createElement("tr");

    // Create columns for the row
    for (let j = 0; j < numCols; j++) {
      // Create a new cell
      let cell = document.createElement("td");

      // Set the text for the cell
      cell.textContent = `Row-${i} Column-${j}`;

      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the row to the table
    table.appendChild(row);
  }
}

  

