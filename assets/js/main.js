
//--------------------------------------------------
// BUILD A SUB 
//--------------------------------------------------

// Global variables to store order data
let superOrder = [];
let superSubTotal = 0

// Function to add a sub
addSub = () => {

  let subName = document.getElementById("sub-name").value;
  let breadType = document.getElementById("bread").value;
  let howDoYouLikeIt = "";

  if (breadType === "White Bread") {
    superSubTotal += 2.99;
  } else if (breadType === "Brown Bread") {
    superSubTotal += 2.49;
  } else if (breadType === "Whole Wheat Bread") {
    superSubTotal += 3.49;
  } else if (breadType === "Multigrain Bread") {
    superSubTotal += 3.99;
  }

  // Declare and calculate values from the radio buttons
  const radios = document.getElementsByName("bread-state-radios");
  howDoYouLikeIt = Array.from(radios).find((radio) => radio.checked).value;
  
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      howDoYouLikeIt = radios[i].value
      superSubTotal = superSubTotal + radios[i].dataset.cost
    }
    
  }
  // Declare and calculate values from the checkboxes
  let subToppings = document.getElementsByName("toppings");
  const subTopArray = [];

  for (let i = 0; i < subToppings.length; i++) {
      if (subToppings[i].checked) {
          subTopArray.push(subToppings[i].value);
          superSubTotal = superSubTotal + subToppings[i].dataset.cost
      }
  }

  let subSause = document.getElementsByName('sauce');
  const subSauceArray = [];

  for (let i = 0; i < subSause.length; i++) {
    if (subSause[i].checked) {
      subSauceArray.push(subSause[i].value);
      superSubTotal = superSubTotal + subSause[i].dataset.cost
    }
    
  }

  superOrder.push({
    subName: subName,
    bread: breadType,
    howDoYouLikeIt: howDoYouLikeIt,
    toppings: subTopArray,
    sauce: subSauceArray,
    price: superSubTotal
  });

  console.log(superOrder)
}

// Function to display the order summary
displayOrder = () => {
  const orderSummary = document.getElementById("order-summary");
  orderSummary.innerHTML = "<h3>Order Summary:</h3>";

  for (let i = 0; i < superOrder.length; i++) {
    const sub = superOrder[i];
    orderSummary.innerHTML += `<div>${sub.name} - R${sub.subTotal}</div>`;
  }

   // Calculate the total cost
   let totalCost = 0;
   for (let i = 0; i < superOrder.length; i++) {
     totalCost += parseFloat(superOrder[i].subTotal);
   }
 
   // Update the total cost in the order summary
   orderSummary.innerHTML += `<div>Total: R${totalCost.toFixed(2)}</div>`;
 };
