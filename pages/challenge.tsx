import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Input, Select, TextArea, Timer } from "../components";

const Play = () => {
  const [randomSentence, setRandomSentence] = useState("");
  const [duration, setDuration] = useState<any>(0);
  const [remainingTime, setRemainingTime] = useState(0.01);
  const [isStarted, setIsStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  let interval: any;

  const fetchSentence = async () => {
    const data = await fetch("/api/sentences");
    const sentences = await data.json();

    const randomIndex = Math.floor(Math.random() * sentences.length);

    setRandomSentence(sentences[randomIndex].text);
  };

  const generateSentence = async (e: any) => {
    // preventDefault and stopPropagation only exist on forms, so
    // they are conditionally called if the event is being dispatched on a form.
    e?.preventDefault();
    e?.stopPropagation();

    setIsStarted(false);
    setShowResult(false);
    fetchSentence();
  };

  const selectDuration = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setDuration(e.target.value);
    setRemainingTime(+e.target.value * 60);
  };

  const startTest = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setShowResult(false);
    if (!!duration) setIsStarted(true);
    setAnswer("");
    setScore(0);
  };

  const startOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsStarted(false);
    setShowResult(false);
    setAnswer("");
    setScore(0);
  };

  const handleAnswerChange = (e: any) => {
    setAnswer(e.target.value);
  };

  const tryAgain = async (e: any) => {
    setIsStarted(false);
    setDuration(0);
    generateSentence(e);
  };

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    e?.stopPropagation();

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
      setShowResult(true);
      console.log(3)
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isStarted) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted]);

  useEffect(() => {
    fetchSentence();
  }, []);

  useEffect(() => {
    // Automatically submit when time runs out
    const submitOnTimeout =  async() => {
      if(isStarted && remainingTime === 0) {
        await handleSubmit();
      }
    }

    submitOnTimeout();
  }, [remainingTime]);
  
  return (
    <main className="header challenge-page">
      <div className="intro container">
        <Link href="/">
          <a className="home-link btn"> {"<<< Go Home"}</a>
        </Link>
        <form className="challenge-form" onSubmit={handleSubmit}>
          <h2 className="header-text">Challenge</h2>

          <p className="random-text text-lg">{randomSentence}</p>
          {!isStarted && (
            <Button
              className="btn btn-brand mt-3"
              content="Generate another sentence"
              onClick={generateSentence}
            />
          )}
          <ul className="instructions text-sm">
            <li>Your challenge is to type the sentence above.</li>
            <li>
              You get one point for every word you type correctly, punctutation
              included and it is case-sensitive.
            </li>
          </ul>

          {!isStarted ? (
            <div>
              <Input
                className="btn"
                label="How many minutes? (1 - 30 min)"
                value={duration}
                onChange={selectDuration}
                type="number"
                min={0}
                max={30}
              />

              <Button
                className="btn btn-brand ml-1"
                content="Start Test"
                onClick={startTest}
                disabled={duration === 0}
              />
            </div>
          ) : (
            <>
              <Timer duration={remainingTime} />
              <TextArea
                className="mt-4 mb-2"
                id="answer"
                value={answer}
                placeholder="Type here..."
                rows={6}
                onChange={handleAnswerChange}
              />

              <Button className="btn btn-gray" content="Submit" />
              <Button
                className="btn btn-gray ml-3"
                content="Start over"
                onClick={startOver}
              />
            </>
          )}
        </form>
      </div>
      <div className="intro">
        <div className="container">
          <h3 className="text-xl mb-3 result-text">
            Your results will appear here
          </h3>
          {showResult && (
            <div>
              <div className="mb-3">
              <TextArea
                className="mt-4 mb-2"
                id="answer"
                value={answer}
                placeholder="Type here..."
                rows={6}
                readOnly
              />
                <p className="text-lg">
                  No of correct words: {score}/
                  {randomSentence.split(" ").length}
                </p>
                <p className="text-lg">
                  Typing speed:{" "}
                  {(
                    answer.split(" ").length /
                    (duration * 60 - remainingTime)
                  ).toFixed(2)}{" "}
                  words/sec
                </p>
              </div>

              <Button
                className="btn btn-brand"
                content="Try again"
                onClick={tryAgain}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Play;
