import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput";
import GuessesList from "../GuessesList";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [outcome, setOutcome] = React.useState(null);

  React.useEffect(() => {
    if (!guesses.length) {
      return;
    }
  }, [guesses]);

  return (
    <>
      <GuessesList guesses={guesses} answer={answer} />
      <TextInput
        setGuesses={setGuesses}
        guesses={guesses}
        answer={answer}
        setOutcome={setOutcome}
      />
      <Banner guesses={guesses} answer={answer} outcome={outcome} />
    </>
  );
}

export default Game;
