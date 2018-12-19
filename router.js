(function main(React, ReactNative,Root,NavigationRouter, equire) {


    var react_1 = React;
    var _reactNative = ReactNative;
    var root = this;
      
    
    var Component = react_1.createClass({
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
 
     
  return Component;

  
})
