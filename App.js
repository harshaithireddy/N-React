var heading = React.createElement(
    "div",
    { id : "div1" },
    [
        React.createElement("div", { id : "child1" }, 
            // React.createElement("h1", {}, "Hello World h1!")
            [React.createElement("h1", {}, "Hello World h1!"), 
                React.createElement("h2", {}, "Hello World h2!") ]
        ),
        React.createElement("div", { id : "child2" }, 
            // React.createElement("h1", {}, "Hello World h1!")
            [React.createElement("h1", {}, "Hello World h1!"), 
                React.createElement("h2", {}, "Hello World h2!") ]
        )
    ]
);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
