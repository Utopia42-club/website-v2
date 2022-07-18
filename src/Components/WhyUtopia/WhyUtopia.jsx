import React from "react";
import data from './data'
import './WhyUtopia.scss'
const WhyUtopia = () => {
    return (
        <div className="why">
            <h1 className="head">Why Utopia42?</h1>
            <div className="whyUtopia">
                {
                    data.map(main => {
                        return (
                            <div className="area" id={main.id}>
                                <div className="title">
                                    <h1>{main.title}</h1>
                                    <img src={main.img} alt="" />
                                </div>

                                <h4 dangerouslySetInnerHTML={{__html:main.para}}></h4>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default WhyUtopia