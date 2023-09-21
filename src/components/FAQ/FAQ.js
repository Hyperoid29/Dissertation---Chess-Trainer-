import React from 'react'

import "./FAQ.css";

import illustration from '../../assets/FAQ.png'

function FAQ() {
    return (
        <div class="container">
            <div class="container-box">
                <div class="col-md-8">
                    <div class="jumbotron">
                        <h4>FAQ</h4>
                    </div>
                </div>
            </div>
            <img className='logo' src={illustration}
                alt="Avatar" />
            <div class="col-md-8">
                <div class="accordion" id="faqAccordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is chess?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div class="card-body">

                                Chess is a two-player strategy board game played on a checkered gameboard with 64 squares arranged in an 8×8 grid.
                            </div>
                        </div>
                    </div>




                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is this website free to use?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div class="card-body">
                                Yes, this website is completely free to use.
                            </div>
                        </div>
                    </div>




                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is this website suitable for advanced players as well?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                While the website is primarily designed for beginners, it can also be used by advanced players for casual games and practice.
                            </div>
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What is the purpose of this website?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faqAccordion">
                            <div class="card-body">
                                The purpose of this website is to provide a user-friendly and intuitive interface for beginners to learn and play chess.
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Can I play against other users on this website?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#faqAccordion">
                            <div class="card-body">
                                Unfortunatley, you cannot play against other people as of at the moment, with further modifications, this may be implemented in the future. So stay tuned.
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Can I view my game history and stats on this website?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#faqAccordion">
                            <div class="card-body">
                                Yes, you can view your game history by copying your FEN or PGN code onto the "analyse" tab. This way you can look at the steps you have taken. The stats are shown on the analytics tab after playing a game of either "Play vs AI" or "Ranked".
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
}
export default FAQ  