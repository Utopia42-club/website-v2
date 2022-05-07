import React, { useState } from 'react';
import './FAQ.scss';
import MORE from "../../assets/add-circleG.svg";
import Less from '../../assets/remove-circleG.svg'
const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div >
      <div className="UNBCsection-faq">
        <div className="accordian" onClick={() => setExpanded(!expanded)} >
          <div className="question">
            {question}
            <div />

          </div>
          <div className="add-sign"  >
            {expanded ? <img src={Less} alt="" /> :
              <img src={MORE} alt="" />
            }
          </div>
        </div>
        <div className={expanded ? 'active content-faq' : 'content-faq'} >
          {answer}
        </div>
      </div>

    </div>
  )
}
export default Question;