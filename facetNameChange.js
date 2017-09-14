window.coveoCustomScripts['default'] = function(promise) {
       Coveo.$('#search').coveo('options', { 
        Facet : { 
        valueCaption : { 
        'ContentDocument' : 'Documents',
         'FeedItem' : 'Discussions'
        } 
      } 
   });
}
