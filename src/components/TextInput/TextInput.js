import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function TextInput({ guesses, setGuesses, setOutcome, answer }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert("max number of guesses has been reached");
      return;
    }
    if (value.length !== 5) {
      setValue("");
      alert("Length of word must be 5");

      return;
    }

    const isCorrect =
      checkGuess(value, answer)
        .map((i) => i.status)
        .findIndex((a) => a === "incorrect" || a === "misplaced") === -1;

    if (isCorrect) {
      setOutcome("happy");
    } else if (!isCorrect && guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setOutcome("sad");
    }

    setValue("");
    const newGuesses = [...guesses];
    setGuesses([...newGuesses, { id: Math.random(), label: value }]);
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        minLength={5}
        maxLength={5}
        onChange={(event) => setValue(event.target.value.toLocaleUpperCase())}
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default TextInput;
