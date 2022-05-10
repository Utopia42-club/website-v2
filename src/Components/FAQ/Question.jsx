import React, { useState } from 'react';
import './FAQ.scss';
import MORE from "../../assets/add-sign.svg";
import Less from '../../assets/remove-circle.svg'
const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div >
      <div className="section-faq">
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
        <div dangerouslySetInnerHTML={{__html:answer}}></div>
        </div>
      </div>

    </div>
  )
}
export default Question;