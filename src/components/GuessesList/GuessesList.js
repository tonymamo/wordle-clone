import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessesList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, 6).map((item, index) => (
        <Guess guess={guesses[index]} key={item} answer={answer} />
      ))}
    </div>
  );
}

export default GuessesList;
