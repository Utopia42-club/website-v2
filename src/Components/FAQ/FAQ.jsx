import { React } from "react";
import { useState } from "react";
import "./FAQ.scss";
import data from './Data'
import Question from "./Question";

const FAQ = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <div className="faq" id="FAQ">
            <h1 className="faqh">SUPPORT & FAQ</h1>
            <div className="faq-questions">
                {questions.map((question) => (
                    <Question key={question.id} {...question} />
                ))}
            </div>
        </div>
    );
}

export default FAQ;
