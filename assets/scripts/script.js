function myFunction(sizeCheck) {
    if (sizeCheck.matches) { // If media query matches
      console.log("Media query matches!");
    } else {
      console.log("Media query doesn't match!");
    }
  }
  
  // Create a MediaQueryList object
  let sizeCheck = window.matchMedia("(min-width: 768px)")
  
  // Call listener function at run time
  myFunction(sizeCheck);
  
  // Attach listener function on state changes
  sizeCheck.addEventListener("change", function() {
    myFunction(sizeCheck);
  });