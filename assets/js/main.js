// NavBar
document.addEventListener("DOMContentLoaded", function(event) {
   
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)
  
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
  toggle.addEventListener('click', ()=>{
  // show navbar
  nav.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
  })
  }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
   // Your code to run since DOM is loaded and ready
  });
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
    const subName = superOrder[i];
    orderSummary.innerHTML += `<div>${subName} - R ${superSubTotal}</div>`;
  }

   // Calculate the total cost
   let totalCost = 0;
   for (let i = 0; i < superOrder.length; i++) {
     totalCost += parseFloat(superOrder[i].superSubTotalTotal);
   }
 
   // Update the total cost in the order summary
   orderSummary.innerHTML += `<hr><div>Total: R ${totalCost}</div>`;
   clearTimeout;
 };

 realTimeCost = () => {

  realTimePrice = 0;

  let breadType = document.getElementById("bread").value;
  if (breadType === "2.99") {
    superSubTotal += 2.99;
  } else if (breadType === "2.49") {
    superSubTotal += 2.49;
  } else if (breadType === "3.49") {
    superSubTotal += 3.49;
  } else if (breadType === "3.99") {
    superSubTotal += 3.99;
  }

  let breadRadios = document.getElementsByName("baseRadio");
  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          realTimePrice = realTimePrice + radios[i].dataset.cost
      }
  }

  let subToppings = document.getElementsByName("toppings");
  for (let i = 0; i < subToppings.length; i++) {
      if (subToppings[i].checked) {
          realTimePrice = realTimePrice + subToppings[i].dataset.cost
      }
  }

  let sauce = document.getElementsByName("toppings");
  for (let i = 0; i < sauce.length; i++) {
      if (sauce[i].checked) {
          realTimePrice = realTimePrice + sauce[i].dataset.cost
      }
  }

  document.getElementById("total-cost").innerHTML = "R" + realTimePrice + ".00"

}

checkOut = () => {
  let data = JSON.stringify(superOrder)
  localStorage.setItem('order', data)
  window.location.href = 'pages/checkout.html';
}