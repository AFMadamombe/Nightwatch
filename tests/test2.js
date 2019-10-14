module.exports = {  tags: ['test12js'],
  "Search engine example": function(browser) {
    browser
      
      .url("https://www.google.co.uk")// Navigate to Google
      
      .setValue("input[name=q]", "Argos")// Enter "Argos" into the search box
      
      .click("input[type=submit]")// Click the search button
      
      .click("h3[class=LC20lb]")// Click the Argos link 

      .assert.title("Argos | Same Day Delivery or Faster In-Store Collection") // Make sure Site title matches
     
     .setValue("input[type=search]", "laptops")//search for laptops
     .pause(3000)
     .click("button[type=submit]")//submit the search
     // Close the browser
      .end();
  }
};

