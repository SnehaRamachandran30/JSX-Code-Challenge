//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(
  <div>
    <h1>My favourite food</h1>
    <ul>
      <li>Biryani</li>
      <li>Momos</li>
      <li>Naan&ButterChicken</li>
    </ul>
  </div>,
  document.getElementById("root")
);
