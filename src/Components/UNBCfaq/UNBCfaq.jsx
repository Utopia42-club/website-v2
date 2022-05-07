import { React } from "react";
import { useState } from "react";
import "./FAQ.scss";
import data from './Data'
import Question from "./Question";

const UNBCFAQ = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <div className="UNBCfaq" id="FAQ">
            <h1 className="faqh">FREQUENTLY ASKED <br />
                QUESTIONS</h1>
            <div className="faq-questions">

                {questions.map((question) => (
                    <Question key={question.id} {...question} />
                ))}

            </div>
        </div>
    );
}

export default UNBCFAQ;
