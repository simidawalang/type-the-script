import { useState, useEffect } from "react";
import { Button, Select, TextArea, Timer } from "../components";

const Play = () => {
  const [randomSentence, setRandomSentence] = useState("");
  const [duration, setDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  let interval: any;

  const fetchSentence = async() => {
    const data = await fetch("/api/sentences"); 
    const sentences = await data.json();

    const randomIndex = Math.floor(Math.random() * sentences.length);

    setRandomSentence(sentences[randomIndex].text);
  }

  const generateSentence = async (e?: any) => {
    e.preventDefault();
    e.stopPropagation();
    fetchSentence();
  };

  const selectDuration = (e: any) => {
    setDuration(e.target.value);
    setRemainingTime(+e.target.value * 60);
  };

  const startTest = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!!duration) setIsStarted(true);
    setScore(0);
  };

  const startOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsStarted(false);
    setScore(0);
  };

  const handleAnswerChange = (e: any) => {
    setAnswer(e.target.value);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setIsStarted(false);

      const randSentWords = randomSentence.split(" ");
      const answerWords = answer.split(" ");

      // If the words match word-for-word
      for (let i = 0; i < randSentWords.length; i++) {
        if (randSentWords[i] === answerWords[i]) {
          setScore((prev) => prev + 1);
        }
      }
      stopTimer();
      setShowResult(true);
      console.log("Submitted");
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isStarted) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStarted]);

  useEffect(() => {
    fetchSentence()
  }, [])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Challenge</h2>
        <p>{randomSentence}</p>
        <p>Type the sentence above, {"(Its case-sensitive)"}</p>

        {!isStarted ? (
          <div>
            <Button
              content="Generate random sentence"
              onClick={generateSentence}
            />
            <Select
              id="duration"
              label="How many minutes?"
              value={duration}
              onChange={selectDuration}
              options={[
                { value: 1, text: "1 min" },
                { value: 2, text: "2 mins" },
                { value: 5, text: "5 mins" },
                { value: "Custom", text: "Custom" },
              ]}
              placeholder="Select the number of minutes"
            />
            <Button
              content="Start Test"
              disabled={!!duration}
              onClick={startTest}
            />
          </div>
        ) : (
          <>
            <TextArea
              id="answer"
              value={answer}
              placeholder="Type here..."
              onChange={handleAnswerChange}
            />
            <Timer duration={remainingTime} />
            <Button content="Submit" />
            <Button content="Start over" onClick={startOver} />
          </>
        )}
      </form>
      {showResult && (
        <div>
          <h3>
            Number of correct words: {score}/{randomSentence.split(" ").length}
          </h3>
          <h3>
            Typing speed:{" "}
            {(
              answer.split(" ").length /
              (duration * 60 - remainingTime)
            ).toFixed(2)}{" "}
            words/sec
          </h3>
          <Button
            content="Try again"
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
              setIsStarted(false);
              setDuration(0);
              generateSentence();
            }}
          />
        </div>
      )}
    </>
  );
};

export default Play;
