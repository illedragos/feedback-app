import React from "react";
import Header from "./components/Header";

//   You could write elements like this, but is not used
//   ---------------------------------------------------
// function App() {
//   return React.createElement(
//     "div",
//     {
//       className: "container",
//     },
//     React.createElement("h1", {}, "My App")
//   );
// }

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <h1>Dragos App</h1>
        <p>awsome</p>
      </div>
    </>
  );
}

export default App;
