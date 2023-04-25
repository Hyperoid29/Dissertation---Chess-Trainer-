import React from 'react'
import chess from '../../assets/chess.png'
import gmhikaru from '../../assets/gmhikaru.png'
import Daniel from '../../assets/danielchess.png'
import eric from '../../assets/eric.png'
import anna from "../../assets/Anna_Cramling.png"
import botez from "../../assets/Botez.png"
import gotham from "../../assets/gotham.png"
import chessbrah from "../../assets/chessbrah.png"
import akanemsko from "../../assets/akanemsko.png"
import blitzstream from "../../assets/blitzstream.png"
import "./Watch.css";
import "../Footer/Footer.css";
function Watch() {
    return (
        <div class="footerName">
            <div className="card-container-group">
                <div class="title">
                    Watch the top streamers in chess!
                </div>
                <a href="https://www.twitch.tv/gmhikaru" target="_blank" rel="noopener noreferrer">
                    <div className="card-container">
                        <img className='logo' src={gmhikaru}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>GMHikaru</h2>
                            <p>Hikaru Nakamura is a Chess Grandmaster and Twitch streamer who shares his passion for the game with his community.
                                Join him as he plays and analyzes chess games, and interacts with viewers in real-time. Click to visit his Twitch channel and watch the action unfold!</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.twitch.tv/chess" target="_blank" rel="noopener noreferrer">
                    <div className="card-container">
                        <img className='logo' src={chess}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Chess.com</h2>
                            <p>Chess.com's Twitch channel brings you live chess tournaments, analysis, and interactive shows with top players and personalities from the chess world.
                                Whether you're a beginner or a seasoned player, join to learn, improve, and enjoy the game. Click to visit the Twitch channel and join the community!</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.twitch.tv/gmnaroditsky" target="_blank" rel="noopener noreferrer">
                    <div className="card-container">
                        <img className='logo' src={Daniel}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Daniel Naroditsky</h2>
                            <p>Daniel Naroditsky is an International Master and former World Youth Chess Champion from the United States.
                                He is also a popular Twitch streamer who shares his passion for chess with his community. On his Twitch channel,
                                viewers can watch Daniel play chess, analyze games, and interact with his audience in real-time. His channel is
                                a great resource for chess enthusiasts of all levels who want to improve their skills and learn more about the game.</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.twitch.tv/imrosen" target="_blank" rel="noopener noreferrer">
                    <div className="card-container">
                        <img className='logo' src={eric}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Eric Rosen</h2>
                            <p>Sure! Eric Rosen is an International Master and Twitch streamer who shares his love for chess with his audience.
                                He has a fun and engaging style of teaching that appeals to players of all skill levels. On his Twitch channel,
                                you can watch him play chess, analyze games, and interact with his viewers in real-time. He also streams other games and content on occasion,
                                adding to the variety of his channel.</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.twitch.tv/annacramling" target="_blank" rel="noopener noreferrer">
                    <div className="card-container">
                        <img className='logo' src={anna}
                            alt="Avatar" />
                        <div className="card-text">
                            <h2>Anna Cramling</h2>
                            <p>Anna Cramling is a Swedish chess player and Twitch streamer known for her exceptional skills in chess.
                                She is a Women's International Master (WIM) and has competed in various national and international tournaments,
                                including the World Youth Chess Championship. Her Twitch channel features live chess matches, chess analysis, and interactive
                                shows where she engages with her community.</p>
                        </div>
                    </div>
                </a>

                <div class="second-container-group">
                    <a href="https://www.twitch.tv/botezlive" target="_blank" rel="noopener noreferrer">
                        <div className="card-container">
                            <img className='logo' src={botez}
                                alt="Avatar" />
                            <div className="card-text">
                                <h2>BotezLive</h2>
                                <p>BotezLive is a popular Twitch channel featuring Alexandra and Andrea Botez, two sisters who stream chess, variety games,
                                    and other entertaining content. They have a large and dedicated community of followers and regularly host chess tournaments,
                                    Q&A sessions, and other interactive events.</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.twitch.tv/gothamchess" target="_blank" rel="noopener noreferrer">
                        <div className="card-container">
                            <img className='logo' src={gotham}
                                alt="Avatar" />
                            <div className="card-text">
                                <h2>GothamChess</h2>
                                <p>GothamChess is a popular Twitch streamer and YouTuber who creates content related to chess. He is known for his engaging and humorous style of teaching chess and has gained a large following on both platforms.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.twitch.tv/chessbrah" target="_blank" rel="noopener noreferrer">
                        <div className="card-container">
                            <img className='logo' src={chessbrah}
                                alt="Avatar" />
                            <div className="card-text">
                                <h2>chessbrah</h2>
                                <p>Chessbrah is a Twitch channel featuring the Canadian chess Grandmasters Eric Hansen and Aman Hambleton. They stream live chess games, offer analysis, and engage with their audience in a fun and interactive way.
                                    The channel has a large following in the chess community and is known for its high-level gameplay. If you're looking for a mix of educational and entertaining content, check out Chessbrah on Twitch</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.twitch.tv/akanemsko" target="_blank" rel="noopener noreferrer">
                        <div className="card-container">
                            <img className='logo' src={akanemsko}
                                alt="Avatar" />
                            <div className="card-text">
                                <h2>akaNemsko</h2>
                                <p>akaNemsko is a female chess streamer on Twitch known for her entertaining and informative streams.
                                    She has a strong focus on community engagement and aims to create a welcoming environment for all levels of chess players.
                                    She frequently streams chess gameplay, analysis, and lessons. Additionally, akaNemsko is a part of the Chess.com stream team and has competed in several high-profile chess tournaments.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.twitch.tv/botezlive" target="_blank" rel="noopener noreferrer">
                        <div className="card-container">
                            <img className='logo' src={blitzstream}
                                alt="Avatar" />
                            <div className="card-text">
                                <h2>BlitzStream</h2>
                                <p>BlitzStream is a chess streamer that showcases mutlliple Chess games which looks at the professionality of the moves he takes. </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Watch