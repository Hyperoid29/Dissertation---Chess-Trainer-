import React, { useState } from 'react'

import './PieceMove.css'
import queenMoves from '../../../assets/queen_Move.mp4'
import kingMoves from '../../../assets/king_Move.mp4'
import knightMoves from '../../../assets/knight_Move.mp4'
import pawnMoves from '../../../assets/pawn_Move.mp4'
import rookMoves from '../../../assets/rook_Move.mp4'
import bishopMoves from '../../../assets/bishop_Move.mp4'

function PieceMove() {
    const data = [

        {
            title: "The Queen",
            description:
                "The queen is the most powerful and versatile piece in chess, able to move any number of squares in any direction to attack, defend, and control the board.",
            video: queenMoves,
        },
        {
            title: "The King",
            description:
                "The king is the most important piece in chess, and the object of the game is to checkmate the opponent's king. The king can move one square in any direction.",
            video: kingMoves,
        },

        {
            title: "The Knight",
            description:
                "The knight moves in an L-shape, two squares in one direction and one square perpendicular to that.",
            video: knightMoves,
        },


        {
            title: "The Pawn",
            description:
                "Pawns are the most numerous pieces in the game, and can move one or two squares forward on their first move, and one square forward on subsequent moves. Pawns capture diagonally, one square forward and to the left or right.",
            video: pawnMoves,
        },


        {
            title: "The Rook",
            description:
                "Rooks can move any number of squares along a rank or file, but cannot jump over other pieces.",
            video: rookMoves,
        },

        {
            title: "The Bishop",
            description:
                "Bishops can move any number of squares diagonally, but cannot jump over other pieces. Each player starts with two bishops, one on a white square and one on a black square.",
            video: bishopMoves,
        },



    ];

    const [selectedVideoIndex, setSelectedVideoIndex] = useState(-1);

    const [lightboxIndex, setLightboxIndex] = useState(-1);

    function openLightbox(index) {
        setLightboxIndex(index);
    }

    function closeLightbox() {
        setLightboxIndex(-1);
    }

    function handleVideoClick(event) {
        event.stopPropagation();
    }

    return (
        <div>
            {data.map((item, index) => (
                <div className="card-container" key={index}>
                    <div className="card-video" onClick={() => openLightbox(index)}>
                        <video src={item.video} onClick={handleVideoClick} />
                        <div className="play-image"></div>
                    </div>
                    <div className="card-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>

                    {lightboxIndex === index && (
                        <div className="lightbox" onClick={closeLightbox}>
                            <div className="lightbox-content">
                                <video src={item.video} onClick={handleVideoClick} controls></video>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PieceMove