import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess.label, answer) : null;
  return (
    <p className="guess">
      {range(0, 5).map((letter) => (
        <span
          className={`cell ${checkedGuess ? checkedGuess[letter].status : ""}`}
          key={letter}
        >
          {guess ? guess.label.split("")[letter] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
