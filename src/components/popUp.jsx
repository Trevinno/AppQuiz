import React, { Component } from 'react';

import '../css/popUp.css'

const popUp = ({totalQuestions, correctAnswers, handleCloseModal}) => {

    // const Message = () => {
    //     console.log(correctAnswers)
    //     switch(true) {
    //         case (correctAnswers < 3):
    //             return 'Te ira mejor a la proxima'
    //         case (correctAnswers < 6):
    //             return 'Bien!'
    //         case (correctAnswers < 8):
    //             return 'Felicidades!'
    //     }
    // } 

    return ( 
        <React.Fragment>
            <div>
                {/* <h2>{Message(correctAnswers)}</h2> */}
                <p>Acertaste {correctAnswers} de {totalQuestions}</p>
                <button
                onClick={() => handleCloseModal()}
                >
                Regresar al Menu Principal
                </button>

            </div>
        </React.Fragment>
     );
}
 
export default popUp;