
  const template = document.getElementById('row-template');
  const tableBody = document.getElementById('table-body');
  const addRowButton = document.getElementById('add-row');

  // Function to add new row
  addRowButton.addEventListener('click', function() {
    const clone = template.content.cloneNode(true);
    
    const itemName = prompt("Enter Item Name:");
    const price = prompt("Enter Price:");

    // Insert user input values into the cloned row
    clone.querySelector('.item-name').textContent = itemName;
    clone.querySelector('.price').textContent = price;

    // Append the new row to the table
    tableBody.appendChild(clone);
  });

