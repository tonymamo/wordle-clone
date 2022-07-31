import React from "react";

function Banner({ guesses, outcome, answer }) {
  if (!outcome) {
    return null;
  }
  return (
    <div className={`${outcome} banner`}>
      {outcome === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
