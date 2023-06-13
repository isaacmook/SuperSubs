// Global variables
var subs = []; // Array to store the created subs

// Function to add a sub
function addSub() {
  var subName = document.getElementById('sub-name').value;
  var breadPrice = parseFloat(document.getElementById('bread').value);
  var selectedToppings = document.querySelectorAll('#toppings input[type="checkbox"]:checked');
  var selectedSauce = document.querySelector('#sauces input[type="radio"]:checked');

  var toppingsCost = 0;
  for (var i = 0; i < selectedToppings.length; i++) {
    toppingsCost += parseFloat(selectedToppings[i].value);
  }

  var sauceCost = parseFloat(selectedSauce.value);

  var subCost = breadPrice + toppingsCost + sauceCost;

  var sub = {
    name: subName,
    bread: breadPrice,
    toppings: toppingsCost,
    sauce: sauceCost,
    cost: subCost
  };

  subs.push(sub);

  // Update the order summary
  updateOrderSummary();

  // Reset the form
  document.getElementById('sub-form').reset();
}

// Function to update the order summary
function updateOrderSummary() {
  var subList = document.getElementById('sub-list');
  var totalCost = 0;

  // Clear the existing sub list
  subList.innerHTML = '';

  // Display each sub in the list
  subs.forEach(function(sub) {
    var listItem = document.createElement('li');
    listItem.textContent = sub.name + ' - $' + sub.cost.toFixed(2);
    subList.appendChild(listItem);

    totalCost += sub.cost;
  });

  // Update the total cost
  document.getElementById('total-cost').textContent = '$' + totalCost.toFixed(2);
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();
}

// Event listener for form submission
document.getElementById('sub-form').addEventListener('submit', handleFormSubmission);
