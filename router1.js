(function main(React, ReactNative,Root,NavigationRouter,createReactClass, require) {


    var react_1 = React;
    var _reactNative = ReactNative;
    var root = this;
      
    
    return createReactClass({
    render: function() {
        return react_1.createElement(Root, { "id" :"roott" },
        [
        
        react_1.createElement(NavigationRouter,
            {
                "id": "M_layout",
                "text": null,
                "notifyType": {}
            }, [])
        ]
         )
      }
   });
 
     
//  return Component;

  
})
