import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
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
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
