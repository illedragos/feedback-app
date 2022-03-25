import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

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
      <div className="container">
        <FeedbackItem />
        <p>awsome</p>
      </div>
    </>
  );
}

export default App;
