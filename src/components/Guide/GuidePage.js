
import React from 'react';
import { Link } from 'react-router-dom';
import "./GuidePage.css";
import img from '../../assets/move-piece.png'
import win from '../../assets/Win-ChessTrainer.png'


export default function GuidePage() {


    return (
        <div className='container-text'>
            <h1>Guide Page</h1>
            <div className="card-container-group">

                <a href="/piecemove">
                    <div className="card-container">
                        <img className='logo' src={img}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Piece Moves</h2>
                            <p>Exploring the rules and strategies involved in moving a chess piece effectively on the board.</p>
                        </div>
                    </div>
                </a>


                <div className="card-container">
                    <a href="/chessopen">
                        <img className='logo' src={win}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Chess Openings</h2>
                            <p>Chess openings refer to the initial moves of a game of chess, where players develop their pieces and control the center of the board in order to gain an advantage.</p>
                        </div>
                    </a>
                </div>

            </div>
        </div >
    );
}

