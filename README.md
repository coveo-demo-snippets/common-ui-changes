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
  
  
                    
<script class="result-template" type="text/x-underscore-template" id="actionDownload">
    <a class="CoveoResultLink" href="{!$Label.SF_url}/contenthub/download/<%=raw.sfid%>">
        <button class="slds-button slds-button_brand" style="font-size: 10px; width: 90px ; background-color: #f4b342; border: none;">Download</button>
    </a>
</script>
  <script class="result-template" type="text/x-underscore-template" id="quickView"></script> 

<script class="result-template" type="text/html" id="actionComment">
<a class="CoveoResultLink" data-field="@clickableuri">
    <img border="0" alt="comment" title="comment not impl for demo" src="https://cdn1.iconfinder.com/data/icons/speech-bubbles/24/Speach-Bubbles-256.png" width="32" height="32">
        </a>
    </script>
  
   
