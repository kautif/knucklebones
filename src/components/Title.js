import React from 'react';
import Nav from './Nav';

export default function Title () {
    return (
        <div className="knucklebones__title">
            <h1>Fishybones</h1>
            <div className="knucklebones__title__flex">
                <img src="simba_happy_face_right.gif" alt="happy orange cat"/>
                <div className="knucklebones__dice-imgs">
                    <img src="dice1.png" alt="die with a value of 1" />
                    <img src="dice2.png" alt="die with a value of 2" />
                    <img src="dice3.png" alt="die with a value of 3" />
                    <img src="dice4.png" alt="die with a value of 4" />
                    <img src="dice5.png" alt="die with a value of 5" />
                    <img src="dice6.png" alt="die with a value of 6" />
                </div>
                <img src="rose_happy_face_left.gif" alt="happy black and white cat"/>
            </div>
            <Nav />
        </div>
    )
}