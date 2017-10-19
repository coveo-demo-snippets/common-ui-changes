# common-ui-changes

This repository is to track common UI changes to Coveo implementations.

Primer: https://developers.coveo.com/display/public/SalesforceV2/Interacting+with+the+Coveo+JavaScript+Search+Framework+with+Custom+Code

1. Changing the filter value of a Facet, please refer to facetNameChange.js

Before:

![Facet Labels Before Change](
https://github.com/coveo-demo-snippets/common-ui-changes/blob/master/facetLabelnochange.PNG)

After:

![Facet Labels After Change](
https://github.com/coveo-demo-snippets/common-ui-changes/blob/master/facetlabelwithchange.PNG)


2. Custom Message when no results appear

Coveo.$('.CoveoSearchInterface').on('deferredQuerySuccess', function(e, args) {
           console.log(args);
            if (!args.results.results.length > 0) {
             
                    var parent = document.querySelector('.coveo-query-summary-search-tips-info');                    
                    console.log(parent);
                    parent.innerHTML = "My custom message";
                    
                }
            
            
        });

3. Template Loader 

  - Images
  
  - Input Checkbox (to select the result and then do something with it)
  
  - Api call (transform likes to stars)
  
   
