import React from 'react';
import Nav from './Nav';

export default function Title () {
    return (
        <div className="knucklebones__title">
            <h1>Fishybones</h1>
            <div className="knucklebones__credit">
                <h2 >Artwork by <a href="https://www.twitch.tv/SuperCaptainRob">SuperCaptainRob</a></h2>
                <h2 >Programmed by <a href="https://www.github.com/kautif/knucklebones">Autif Kamal</a><span>/</span>
                <a href="https://www.twitch.com/MinisterGold">(MinisterGold)</a></h2>
            </div>
            <div className="knucklebones__title__flex">
                <img className="knucklebones__cat-img" src="simba_happy_face_right.gif" alt="happy orange cat"/>
                <div className="knucklebones__dice-imgs">
                    <img className="knucklebones__die-img" src="dice1.png" alt="die with a value of 1" />
                    <img className="knucklebones__die-img" src="dice2.png" alt="die with a value of 2" />
                    <img className="knucklebones__die-img" src="dice3.png" alt="die with a value of 3" />
                    <img className="knucklebones__die-img" src="dice4.png" alt="die with a value of 4" />
                    <img className="knucklebones__die-img" src="dice5.png" alt="die with a value of 5" />
                    <img className="knucklebones__die-img" src="dice6.png" alt="die with a value of 6" />
                </div>
                <img className="knucklebones__cat-img" src="rose_happy_face_left.gif" alt="happy black and white cat"/>
            </div>
            <Nav />
        </div>
    )
}