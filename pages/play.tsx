import { useState, useEffect } from "react";
import { Button, Select } from "../components";
import RandomSentence from "random-sentence";

interface PageProps {
  randSentence: string;
}

const Play = ({ randSentence }: PageProps) => {
  const [randomSentence, setRandomSentence] = useState("");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setRandomSentence(randSentence);
  }, []);

  const generateSentence = async () => {
    setRandomSentence(RandomSentence({ min: 2, max: 20 }));
  };

  const selectDuration = (e: any) => {
    setDuration(e.target.value);
  };

  return (
    <>
      <form></form>
      <h2>Play</h2>
      <p>{randomSentence}</p>
      <p>Copy and</p>
      <Button content="Generate random sentence" onClick={generateSentence} />
      <Select
        id="duration"
        label="Select duration:"
        value={duration}
        onChange={selectDuration}
        options={[
          { value: 1, text: "1 min" },
          { value: 2, text: "2 mins" },
          { value: 5, text: "5 mins" },
          { value: "Custom" },
        ]}
      />
      <Button content="Start Test" onClick={() => console.log(duration)}/>
      
    </>
  );
};

export const getServerSideProps = async () => {
  const randSentence = await RandomSentence({ words: 5 });

  return {
    props: {
      randSentence,
    },
  };
};

export default Play;
