import React, { useState } from 'react'


import OpenGames from '../../../assets/OpenGame.png'
import ClosedGame from '../../../assets/ClosedGame.png'
import SymmetricalOpening from '../../../assets/Symmetrical Opening.png'
import GambitOpening from '../../../assets/GambitOpening.png'
import ClassicalOpening from '../../../assets/ClassicalOpening.png'
import './ChessOpenings.css'

function ChessOpenings() {
    const data = [
        {
            title: "Open Games",
            description:
                "Open Games refer to all openings that start with the moves 1.e4 e5. It is called “open games” because the centre will typically open up quite easily, increasing the tactical possibilities for both sides.",
            description2:
                "Open Games typically lead to positions where:Both sides prioritize rapid development of the pieces. Early clashes happen in the centre as both sides aims to occupy central squares. Early pawn- exchanges in the centre can quickly lead to very open positions. Tactical combinations are lurking since the pieces can move around more freely–due to the open nature of the centre. Both sides should get their king out of the centre as soon as possible, or risk sudden onslaught if the centre opens.",
            image: OpenGames,
        },
        {
            title: "Closed Games",
            description:
                "Closed Games refer to all openings that start with the moves 1.d4 d5. It is called “closed games” because the centre will typically be closed, partly sue to the fact both sides have a pawn in the centre that is already defended by the queen–which implies these pawns are less likely to be attacked or exchanged easily, resulting in a closed centre.",
            description2:
                "An immediate consequence of the initial moves 1.d4 d5 is that both sides will delay castling with at least one move because it will take at least one move extra to develop the bishop on the f-file (should white want to castle king-side). Also note that the d- pawns are already defended by their respective queens–which means neither side can make immediate threats against the pawn in the centre(as is the case in 1.e4 e5 openings).For these reasons, in part, Closed Games are usually less tactical in nature than Open Games.",
            image: ClosedGame,
        },

        {
            title: "Symmetrical Openings",
            description:
                "In symmetrical openings black aims to keep the balance for as long as possible by adopting the same setup as white. This is often an easy way for black to equalize in the opening, however, white will always keep the advantage of “having the move” in symmetrical openings.",
            description2:
                "Diagram on the left: The Symmetrical Variation of the English Opening. White can choose to break the symmetry first by playing 4.d2-d4. Now if black plays 4… d7-d5? then 5.dxc5 dxc4 6.Qxd8+ gives white an edge and proves black cannot maintain the symmetry indefinitely.",
            image: SymmetricalOpening,
        },

        {
            title: "Gambit Openings",
            description:
                "A gambit opening is an opening where you sacrifice one (or sometimes even more) pawns in exchange for certain positional advantages.",
            description2:
                "Diagram on the left: The Queen’s Gambit is the most common Gambit Opening in chess. Most of the time though, black declines. Gambit openings are typically designed to speed up your development and/ or slow down your opponent’s development.The side who sacrificed the pawn must play aggressively before the other side manages to solidify their position.The player who has the extra pawn will either try to hang on to material advantage or plan to return the pawn in exchange for regaining some initiative.",
            image: GambitOpening,
        },
        {
            title: "Classical Openings",
            description:
                "Classical openings are based on a very direct approach toward achieving the opening objectives, particularly with regard to placing and supporting pawns in the centre.",
            description2:
                "Diagram above: The Ruy Lopez is an example of a Classical Opening. White immediately increases the pressure on the central e5-pawn by attacking it’s defender, the black knight on c6. Classical Openings typically lead to positions where both sides use every move to fight for control of the centre. The classical approach to the opening is that it is best to fight for the centre right away, particularly by placing your pawns in the centre as soon as possible. In Hypermodern Openings, on the other hand, the strategy is to attack and undermine your opponent’s central pawns from a distance, mainly with pieces and flank-pawns.",
            image: ClassicalOpening,
        },
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    function openLightbox(index) {
        setSelectedImageIndex(index);
        setLightboxIndex(index);
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        setLightboxIndex(-1);
        setSelectedImageIndex(-1);
        document.body.style.overflow = "auto";
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {data.map((item, index) => (
                <div className="card-container" key={index}>

                    <div className="card-image-container" >
                        <img className="card-image" src={item.image} alt={item.title} />
                    </div>
                    <div className="card-text">
                        <h2>{item.title}</h2>
                        <div className="description-container">
                            <p>{item.description}</p>
                            <p>{item.description2}</p>
                        </div>
                    </div>

                    {lightboxIndex === index && (
                        <div className="lightbox" >
                            <div className="lightbox-content-container">
                                <div className="lightbox-content">
                                    <div className="lightbox-image-container">
                                        <img className="lightbox-image" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="lightbox-text-container">
                                        <h2>{item.title}</h2>
                                        <div className="description-container">
                                            <p>{item.description}</p>
                                            <p>{item.description2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>

    );
}
export default ChessOpenings