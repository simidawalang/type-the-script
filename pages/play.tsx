import { useState, useEffect} from "react";
import axios from "axios";
import type { NextPage} from "next";
import Button from "../components/Button";
import RandomSentence from "random-sentence";

interface PageProps {
    randSentence: string;
}

const Play = ({randSentence}: PageProps) => {
    const [randomSentence, setRandomSentence] = useState("");

    useEffect(() => {
        setRandomSentence(randSentence);
    }, []);

    const generateSentence = async () => {
        setRandomSentence(RandomSentence({min: 2, max: 20}));
    }

    return (
        <>
        <h2>Play</h2>
        <p>{randomSentence}</p>
        <p>Copy and</p>
        <Button content="Generate random sentence" onClick={generateSentence}/>
        </>
    )
}

export const getServerSideProps = async() => {
    const randSentence = await RandomSentence({words: 5});

    return {
        props: {
            randSentence
        }
    }
}

export default Play;