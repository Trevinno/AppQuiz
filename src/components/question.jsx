import React, { Component } from 'react';

import '../css/question.css'

const Question = () => {
    return (  
        <React.Fragment>
            <div className="center">
                <div className="page">
                    <div className="question">Le gana Rayados al Santos?</div>
                    <div className="father_flex"> 
                        <div className="left_space son_flex">Si</div>
                        <div className="son_flex">Chance</div>
                    </div>

                    <div className="father_flex"> 
                        <div className="left_space son_flex">No se</div>
                        <div className="son_flex">Talvez</div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Question;