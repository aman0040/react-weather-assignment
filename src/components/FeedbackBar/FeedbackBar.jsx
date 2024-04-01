import "./feedbackBar.css";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

function FeedbackBar({ message, setMessage }) {
  useEffect(() => {
    let timeOut = setTimeout(setMessage, 2000, "");
    return () => {
      clearTimeout(timeOut);
    };
  });

  function closeFeedback() {
    setMessage("");
  }

  if (message == null || message == "") {
    return <></>;
  } else {
    return (
      <div className="feedback">
        <p>{message}</p>
        <span className="material-symbols-outlined" onClick={closeFeedback}> close </span>
      </div>
    );
  }
}

FeedbackBar.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
};

export default FeedbackBar;
