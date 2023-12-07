import { useEffect, useRef, useState } from "react";
import { wordsArray } from "../../constants/data";
import "./GuessTheWordGame.css";

function generateRandomWord() {
    let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return word.toLowerCase();
}

const GuessTheWordGame = () => {
    const [wordToGuess, setWordToGuess] = useState(generateRandomWord());
    const [inputsValues, setInputsValues] = useState(
        Array(wordToGuess.length).fill("")
    );
    const inputsRef = useRef([]);
        console.log(wordToGuess);
    useEffect(() => {
        inputsRef.current[0].focus();
    }, [wordToGuess]);

    const handleInputChange = (i, value) => {
        const newInputValues = [...inputsValues];
        newInputValues[i] = value.toLowerCase();
        setInputsValues(newInputValues);

        if (value !== wordToGuess[i]) {
            setTimeout(() => {
                inputsRef.current[i].value = "";
            }, 500);
            return;
        }

        if (i < inputsValues.length - 1) {
            inputsRef.current[i + 1].focus();
        }
    };

    const handlePlayAgain = () => {
        const newWord = generateRandomWord();
        setInputsValues(Array(newWord.length).fill(""));
        setWordToGuess(newWord);
    };

    return (
        <div className="GuessTheWordGame">
            <h1>Guess The Word Game</h1>
            <div className="letters-inputs-container">
                {inputsValues.map((letter, index) => {
                    return (
                        <input
                            className={
                                letter === wordToGuess[index] ? "correct" : ""
                            }
                            key={index}
                            type="text"
                            maxLength={1}
                            ref={(el) => (inputsRef.current[index] = el)}
                            onChange={(e) =>
                                handleInputChange(index, e.target.value)
                            }
                            value={letter.toLowerCase()}
                        />
                    );
                })}
            </div>
            {inputsValues.join("") === wordToGuess && (
                <div className="won-container">
                    <h2>You Won The Word Was {wordToGuess}</h2>
                    <button onClick={handlePlayAgain}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default GuessTheWordGame;
