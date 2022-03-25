import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feddback-list">
      {feedback.map((feedback) => (
        <FeedbackItem key={feedback.id} item={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;
