module.exports = {
  tags: ['DTR login'],
  'TDR test Login' : function (browser) {
       browser 
       .url('https://integration.thedatarefinery.co.uk/login') // Go to a url
       .waitForElementVisible('body', 1000) // wait till page loads

       refinery = ExecuteScript("return document.querySelector(\"body > data-refinery\")")
       button = ExecuteScript("return arguments[0].shadowRoot.querySelector(\"toolbar-menu\").shadowRoot.querySelector(\"a[href='/login']\")", refinery)
       button.Click()
       .pause(3000)

       page = ExecuteScript("return arguments[0].shadowRoot.querySelector(\"#appHeaderLayout > iron-pages > login-page\")", refinery)
       email = ExecuteScript("return arguments[0].shadowRoot.querySelector(\"input[name='email']\")", page)
       .setValue(email,"data@thedatarefinery.co.uk")
       .pause(2000)

      
       .end();
     }
};