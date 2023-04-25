import React, { useState } from 'react';
import Modal from './Modal';


import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import { arrayUnion, doc, updateDoc, increment, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import * as admin from "firebase-admin";

const gameEndStatusCode = {
    CHECKMATE_BY_WHITE: 1,
    CHECKMATE_BY_BLACK: 2,
    STALEMATE: 3,
    THREEFOLD_REP: 4,
    INSUFFICIENT_MAT: 5,
    FIFTY_MOVE: 6
};


export default function GameoverModal({ playerColor, statusCode, startNewGame, closeModal }) {
    let text = "", result = "";

    let lossRate = 0;

    const [saved, setSaved] = useState(false)
    const { user } = UserAuth();
    const [totalMatches, setTotalMatches] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [eloRating, setEloRating] = useState(1200);

    const matchID = doc(db, 'users', `${user.email}`)


    /*
const lossMatchRestart = async () => {
    if (user?.email) {
        setSaved(true);
        const now = new Date();
        const currentMonth = now.getMonth() + 1; // Adding 1 because getMonth() returns 0-indexed month
        const currentYear = now.getFullYear();
        const currentMinute = now.getMinutes();
        const userDataRef = doc(db, 'users', user.email, `${currentYear}/${currentMonth}`);
        getDoc(userDataRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    const updatedData = {
                        matches: increment(1),
                        losses: increment(1)
                    };
                    updateDoc(userDataRef, updatedData);
                } else {
                    setDoc(userDataRef, {
                        matches: 1,
                        wins: 0,
                        losses: 1
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error getting document: ${errorCode}/ ${errorMessage}`);
            });
    } else {
        alert('Please log in to save your matches');
    }
    startNewGame();
};
*/

    /*
        let userDataRef;
        const lossMatchRestart = async () => {
            if (user?.email) {
                setSaved(true);
                const now = new Date();
                const currentMonth = now.getMonth() + 1; // Adding 1 because getMonth() returns 0-indexed month
                const currentYear = now.getFullYear();
                const currentDay = now.getDate();
                const userCollectionRef = collection(db, 'users');
                const userDocRef = doc(userCollectionRef, user.email);
                const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
                const dayDataRef = doc(userDataRef, `${currentDay}-${currentMonth}`);
    
                // Check if the day document exists and update it
                const dayDocSnapshot = await getDoc(dayDataRef);
                if (dayDocSnapshot.exists()) {
                    const dayData = dayDocSnapshot.data();
                    const updatedData = {
                        matches: increment(1),
                        losses: increment(1),
                    };
                    updateDoc(dayDataRef, updatedData);
                } else {
                    // Create the day document and set the data
                    setDoc(dayDataRef, {
                        matches: 1,
                        wins: 0,
                        losses: 1,
                    });
                }
    
                // Update the total data for the month
                const monthDocRef = doc(userDataRef, 'totals');
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const updatedData = {
                        totalMatches: increment(1),
                        totalLosses: increment(1)
                    };
                    updateDoc(monthDocRef, updatedData);
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 0,
                        totalLosses: 1
                    });
                }
            } else {
                alert('Please log in to save your matches');
            }
            startNewGame();
        };
    
    */






    /*
        const lossMatchRestart = async () => {
            if (user?.email) {
                setSaved(true);
                const now = new Date();
                const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
                const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
                const currentYear = now.getFullYear();
                const userCollectionRef = collection(db, 'users');
                const userDocRef = doc(userCollectionRef, user.email);
                const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
                const dayDataRef = doc(userDataRef, `${currentDate}`);
    
                // Check if the day document exists and update it
                const dayDocSnapshot = await getDoc(dayDataRef);
                if (dayDocSnapshot.exists()) {
                    const dayData = dayDocSnapshot.data();
                    const updatedData = {
                        matches: increment(1),
                        losses: increment(1),
                    };
    
                    // Update the day data
                    await updateDoc(dayDataRef, updatedData);
    
                    // Update the total data
                    const monthDocRef = doc(userDataRef, currentMonth);
                    const monthDocSnapshot = await getDoc(monthDocRef);
                    if (monthDocSnapshot.exists()) {
                        const monthData = monthDocSnapshot.data();
                        setTotalMatches(monthData.totalMatches + 1);
                        setTotalWins(monthData.totalWins);
                        setTotalLosses(monthData.totalLosses + 1);
                        await updateDoc(monthDocRef, {
                            totalMatches: increment(1),
                            totalLosses: increment(1),
                        });
                    } else {
                        setDoc(monthDocRef, {
                            totalMatches: 1,
                            totalWins: 0,
                            totalLosses: 1,
                        });
                        setTotalMatches(1);
                        setTotalWins(0);
                        setTotalLosses(1);
                    }
                } else {
                    // Create the day document and set the data
                    await setDoc(dayDataRef, {
                        matches: 1,
                        wins: 0,
                        losses: 1,
                    });
    
                    // Update the total data
                    const monthDocRef = doc(userDataRef, currentMonth);
                    const monthDocSnapshot = await getDoc(monthDocRef);
                    if (monthDocSnapshot.exists()) {
                        const monthData = monthDocSnapshot.data();
                        await updateDoc(monthDocRef, {
                            totalMatches: increment(1),
                            totalLosses: increment(1),
                        });
    
                        // Fetch the updated data and update the state variables
                        const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                        if (updatedMonthDocSnapshot.exists()) {
                            const updatedMonthData = updatedMonthDocSnapshot.data();
                            setTotalMatches(updatedMonthData.totalMatches);
                            setTotalWins(updatedMonthData.totalWins);
                            setTotalLosses(updatedMonthData.totalLosses);
                            if (totalMatches > 0) {
                                setEloRating(eloRating + 30);
                            }
                        }
                    } else {
                        setDoc(monthDocRef, {
                            totalMatches: 1,
                            totalWins: 0,
                            totalLosses: 1,
                        });
                        setTotalMatches(1);
                        setTotalWins(0);
                        setTotalLosses(1);
                    }
                }
            } else {
                alert('Please log in to save your matches');
            }
            startNewGame();
        };
    */
    const calculateNewRating = (oldRating, didWin) => {
        const kFactor = 32; // Elo rating constant
        const expectedScore = 1 / (1 + 10 ** ((1200 - oldRating) / 400)); // Expected score based on Elo rating difference
        const actualScore = didWin ? 1 : 0; // Actual score is 1 for a win, 0 for a loss
        let newRating = oldRating + kFactor * (actualScore - expectedScore); // Calculate new rating
        if (isNaN(newRating)) { // If new rating is NaN, return default value of 1200
            newRating = 1200;
        }
        return newRating;
    };
    const lossMatchRestart = async () => {
        if (user?.email) {
            setSaved(true);
            const now = new Date();
            const currentMonth = now.toLocaleString("default", { month: "long" }); // get the month name
            const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
            const currentYear = now.getFullYear();
            const userCollectionRef = collection(db, "users");
            const userDocRef = doc(userCollectionRef, user.email);
            const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
            const dayDataRef = doc(userDataRef, `${currentDate}`);

            // Check if the day document exists and update it
            const dayDocSnapshot = await getDoc(dayDataRef);
            if (dayDocSnapshot.exists()) {
                const dayData = dayDocSnapshot.data();
                const updatedData = {
                    matches: increment(1),
                    losses: increment(1),
                };

                // Update the day data
                await updateDoc(dayDataRef, updatedData);

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const updatedData = {
                        totalMatches: increment(1),
                        totalLosses: increment(1),
                    };

                    // Check if the eloRating field exists
                    if (!monthData.eloRating) {
                        updatedData.eloRating = 1200; // Set default value of 1200
                        setEloRating(1200);
                    } else {
                        // Calculate and update Elo rating
                        const oldRating = monthData.eloRating;
                        const newRating = Math.round(calculateNewRating(oldRating, false)); // opponent rating is set to default value of 1200
                        updatedData.eloRating = newRating;
                        setEloRating(newRating);
                    }

                    // Update the month data
                    await updateDoc(monthDocRef, updatedData);

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        if (updatedMonthData.eloRating) {
                            setEloRating(updatedMonthData.eloRating);
                        }
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 0,
                        totalLosses: 1,
                        eloRating: 1200,
                    });
                    setTotalMatches(1);
                    setTotalWins(0);
                    setTotalLosses(1);
                    setEloRating(1200);
                }
            } else {
                // Create the day document and set the data
                await setDoc(dayDataRef, {
                    matches: 1,
                    wins: 0,
                    losses: 1,
                });

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const updatedData = {
                        totalMatches: increment(1),
                        totalLosses: increment(1),
                    };

                    // Calculate and update Elo rating
                    let oldRating = monthData.eloRating;
                    let newRating;
                    if (oldRating === undefined) {
                        oldRating = 1200;
                        newRating = Math.round(calculateNewRating(oldRating, false));
                        updatedData.eloRating = newRating;
                        console.log("New Elo rating:", newRating); // Log the new Elo rating
                    } else if (typeof oldRating === "number") {
                        newRating = Math.round(calculateNewRating(oldRating, false));
                        updatedData.eloRating = newRating;
                        console.log("New Elo rating:", newRating); // Log the new Elo rating
                    }

                    // Update the month data
                    await updateDoc(monthDocRef, updatedData);

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        setEloRating(updatedMonthData.eloRating); // Update the state variable for eloRating
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 0,
                        totalLosses: 1,
                        eloRating: 1200,
                    });
                    setTotalMatches(1);
                    setTotalWins(0);
                    setTotalLosses(1);
                    setEloRating(1200);
                }
            }
        } else {
            alert('Please log in to save your matches');
        }
        startNewGame();
    };





    /*
        const winMatchRestart = async () => {
            if (user?.email) {
                setSaved(true)
                // Get the current month and year
                const now = new Date();
                const currentMonth = now.getMonth() + 1; // Adding 1 because getMonth() returns 0-indexed month
                const currentYear = now.getFullYear();
    
                // Update the user's monthly data for the current month and year
                const userDataRef = doc(db, 'users', user.email, `${currentYear}`, `${currentMonth}`);
                await updateDoc(userDataRef, {
                    matches: increment(1),
                    wins: increment(1)
                })
            } else {
                alert('Please log in to save your matches')
            }
            startNewGame();
        }
    */

    /*
        const winMatchRestart = async () => {
            if (user?.email) {
                setSaved(true);
                const now = new Date();
                const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
                const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
                const currentYear = now.getFullYear();
                const userCollectionRef = collection(db, 'users');
                const userDocRef = doc(userCollectionRef, user.email);
                const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
                const dayDataRef = doc(userDataRef, `${currentDate}`);
    
                // Check if the day document exists and update it
                const dayDocSnapshot = await getDoc(dayDataRef);
                if (dayDocSnapshot.exists()) {
                    const dayData = dayDocSnapshot.data();
                    const updatedData = {
                        matches: increment(1),
                        wins: increment(1),
                    };
    
                    // Update the day data
                    await updateDoc(dayDataRef, updatedData);
    
                    // Update the total data
                    const monthDocRef = doc(userDataRef, currentMonth);
                    const monthDocSnapshot = await getDoc(monthDocRef);
                    if (monthDocSnapshot.exists()) {
                        const monthData = monthDocSnapshot.data();
                        setTotalMatches(monthData.totalMatches + 1);
                        setTotalWins(monthData.totalWins);
                        setTotalLosses(monthData.totalLosses + 1);
                        await updateDoc(monthDocRef, {
                            totalMatches: increment(1),
                            totalWins: increment(1),
                        });
                    } else {
                        setDoc(monthDocRef, {
                            totalMatches: 1,
                            totalWins: 1,
                            totalLosses: 0,
                        });
                        setTotalMatches(1);
                        setTotalWins(1);
                        setTotalLosses(0);
                    }
                } else {
                    // Create the day document and set the data
                    await setDoc(dayDataRef, {
                        matches: 1,
                        wins: 1,
                        losses: 0,
                    });
    
                    // Update the total data
                    const monthDocRef = doc(userDataRef, currentMonth);
                    const monthDocSnapshot = await getDoc(monthDocRef);
                    if (monthDocSnapshot.exists()) {
                        const monthData = monthDocSnapshot.data();
                        await updateDoc(monthDocRef, {
                            totalMatches: increment(1),
                            totalWins: increment(1),
                        });
    
                        // Fetch the updated data and update the state variables
                        const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                        if (updatedMonthDocSnapshot.exists()) {
                            const updatedMonthData = updatedMonthDocSnapshot.data();
                            setTotalMatches(updatedMonthData.totalMatches);
                            setTotalWins(updatedMonthData.totalWins);
                            setTotalLosses(updatedMonthData.totalLosses);
                        }
                    } else {
                        setDoc(monthDocRef, {
                            totalMatches: 1,
                            totalWins: 1,
                            totalLosses: 0,
                        });
                        setTotalMatches(1);
                        setTotalWins(1);
                        setTotalLosses(0);
                    }
                }
            } else {
                alert('Please log in to save your matches');
            }
            startNewGame();
        };
    
    */

    const winMatchRestart = async () => {
        if (user?.email) {
            setSaved(true);
            const now = new Date();
            const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
            const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
            const currentYear = now.getFullYear();
            const userCollectionRef = collection(db, 'users');
            const userDocRef = doc(userCollectionRef, user.email);
            const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
            const dayDataRef = doc(userDataRef, `${currentDate}`);

            // Check if the day document exists and update it
            const dayDocSnapshot = await getDoc(dayDataRef);
            if (dayDocSnapshot.exists()) {
                const dayData = dayDocSnapshot.data();
                const updatedData = {
                    matches: increment(1),
                    wins: increment(1),
                };

                // Update the day data
                await updateDoc(dayDataRef, updatedData);

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    setTotalMatches(monthData.totalMatches + 1);
                    setTotalWins(monthData.totalWins + 1);
                    setTotalLosses(monthData.totalLosses);
                    const newEloRating = Math.round(calculateNewRating(monthData.eloRating, true)); // calculate new Elo rating
                    await updateDoc(monthDocRef, {
                        totalMatches: increment(1),
                        totalWins: increment(1),
                        eloRating: newEloRating, // update the user's Elo rating
                    });
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 1,
                        totalLosses: 0,
                        eloRating: 1200, // set default Elo rating for new month
                    });
                    setTotalMatches(1);
                    setTotalWins(1);
                    setTotalLosses(0);
                }
            } else {
                // Create the day document and set the data
                await setDoc(dayDataRef, {
                    matches: 1,
                    wins: 1,
                    losses: 0,
                });

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const newEloRating = Math.round(calculateNewRating(monthData.eloRating, true)); // calculate new Elo rating and round to nearest whole number
                    await updateDoc(monthDocRef, {
                        totalMatches: increment(1),
                        totalWins: increment(1),
                        eloRating: newEloRating, // update the user's Elo rating
                    });

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        setEloRating(updatedMonthData.eloRating);
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 1,
                        totalLosses: 0,
                        setEloRating: 1200
                    });
                    setTotalMatches(1);
                    setTotalWins(1);
                    setTotalLosses(0);
                    setEloRating(1200);
                }
            }
        } else {
            alert('Please log in to save your matches');
        }
        startNewGame();
    };


    const lossMatchClose = async () => {
        if (user?.email) {
            setSaved(true);
            const now = new Date();
            const currentMonth = now.toLocaleString("default", { month: "long" }); // get the month name
            const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
            const currentYear = now.getFullYear();
            const userCollectionRef = collection(db, "users");
            const userDocRef = doc(userCollectionRef, user.email);
            const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
            const dayDataRef = doc(userDataRef, `${currentDate}`);

            // Check if the day document exists and update it
            const dayDocSnapshot = await getDoc(dayDataRef);
            if (dayDocSnapshot.exists()) {
                const dayData = dayDocSnapshot.data();
                const updatedData = {
                    matches: increment(1),
                    losses: increment(1),
                };

                // Update the day data
                await updateDoc(dayDataRef, updatedData);

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const updatedData = {
                        totalMatches: increment(1),
                        totalLosses: increment(1),
                    };

                    // Check if the eloRating field exists
                    if (!monthData.eloRating) {
                        updatedData.eloRating = 1200; // Set default value of 1200
                        setEloRating(1200);
                    } else {
                        // Calculate and update Elo rating
                        const oldRating = monthData.eloRating;
                        const newRating = Math.round(calculateNewRating(oldRating, false)); // opponent rating is set to default value of 1200
                        updatedData.eloRating = newRating;
                        setEloRating(newRating);
                    }

                    // Update the month data
                    await updateDoc(monthDocRef, updatedData);

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        if (updatedMonthData.eloRating) {
                            setEloRating(updatedMonthData.eloRating);
                        }
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 0,
                        totalLosses: 1,
                        eloRating: 1200,
                    });
                    setTotalMatches(1);
                    setTotalWins(0);
                    setTotalLosses(1);
                    setEloRating(1200);
                }
            } else {
                // Create the day document and set the data
                await setDoc(dayDataRef, {
                    matches: 1,
                    wins: 0,
                    losses: 1,
                });

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const updatedData = {
                        totalMatches: increment(1),
                        totalLosses: increment(1),
                    };

                    // Calculate and update Elo rating
                    let oldRating = monthData.eloRating;
                    let newRating;
                    if (oldRating === undefined) {
                        oldRating = 1200;
                        newRating = Math.round(calculateNewRating(oldRating, false));
                        updatedData.eloRating = newRating;
                        console.log("New Elo rating:", newRating); // Log the new Elo rating
                    } else if (typeof oldRating === "number") {
                        newRating = Math.round(calculateNewRating(oldRating, false));
                        updatedData.eloRating = newRating;
                        console.log("New Elo rating:", newRating); // Log the new Elo rating
                    }

                    // Update the month data
                    await updateDoc(monthDocRef, updatedData);

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        setEloRating(updatedMonthData.eloRating); // Update the state variable for eloRating
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 0,
                        totalLosses: 1,
                        eloRating: 1200,
                    });
                    setTotalMatches(1);
                    setTotalWins(0);
                    setTotalLosses(1);
                    setEloRating(1200);
                }
            }
        } else {
            alert('Please log in to save your matches');
        }

        closeModal();
    }

    const winMatchClose = async () => {
        if (user?.email) {
            setSaved(true);
            const now = new Date();
            const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
            const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
            const currentYear = now.getFullYear();
            const userCollectionRef = collection(db, 'users');
            const userDocRef = doc(userCollectionRef, user.email);
            const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
            const dayDataRef = doc(userDataRef, `${currentDate}`);

            // Check if the day document exists and update it
            const dayDocSnapshot = await getDoc(dayDataRef);
            if (dayDocSnapshot.exists()) {
                const dayData = dayDocSnapshot.data();
                const updatedData = {
                    matches: increment(1),
                    wins: increment(1),
                };

                // Update the day data
                await updateDoc(dayDataRef, updatedData);

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    setTotalMatches(monthData.totalMatches + 1);
                    setTotalWins(monthData.totalWins + 1);
                    setTotalLosses(monthData.totalLosses);
                    const newEloRating = Math.round(calculateNewRating(monthData.eloRating, true)); // calculate new Elo rating
                    await updateDoc(monthDocRef, {
                        totalMatches: increment(1),
                        totalWins: increment(1),
                        eloRating: newEloRating, // update the user's Elo rating
                    });
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 1,
                        totalLosses: 0,
                        eloRating: 1200, // set default Elo rating for new month
                    });
                    setTotalMatches(1);
                    setTotalWins(1);
                    setTotalLosses(0);
                }
            } else {
                // Create the day document and set the data
                await setDoc(dayDataRef, {
                    matches: 1,
                    wins: 1,
                    losses: 0,
                });

                // Update the total data
                const monthDocRef = doc(userDataRef, currentMonth);
                const monthDocSnapshot = await getDoc(monthDocRef);
                if (monthDocSnapshot.exists()) {
                    const monthData = monthDocSnapshot.data();
                    const newEloRating = Math.round(calculateNewRating(monthData.eloRating, true)); // calculate new Elo rating and round to nearest whole number
                    await updateDoc(monthDocRef, {
                        totalMatches: increment(1),
                        totalWins: increment(1),
                        eloRating: newEloRating, // update the user's Elo rating
                    });

                    // Fetch the updated data and update the state variables
                    const updatedMonthDocSnapshot = await getDoc(monthDocRef);
                    if (updatedMonthDocSnapshot.exists()) {
                        const updatedMonthData = updatedMonthDocSnapshot.data();
                        setTotalMatches(updatedMonthData.totalMatches);
                        setTotalWins(updatedMonthData.totalWins);
                        setTotalLosses(updatedMonthData.totalLosses);
                        setEloRating(updatedMonthData.eloRating);
                    }
                } else {
                    setDoc(monthDocRef, {
                        totalMatches: 1,
                        totalWins: 1,
                        totalLosses: 0,
                        setEloRating: 1200
                    });
                    setTotalMatches(1);
                    setTotalWins(1);
                    setTotalLosses(0);
                    setEloRating(1200);
                }
            }
        } else {
            alert('Please log in to save your matches');
        }
        closeModal();
    }


    switch (statusCode) {
        case gameEndStatusCode.CHECKMATE_BY_WHITE:
            text = (playerColor === 'w')
                ? <div>

                    <button className="btn btn-success" onClick={winMatchRestart} >New Game</button>
                    <button className="btn btn-danger" onClick={winMatchClose} >Close</button>


                </div>
                : <div>
                    <button className="btn btn-success" onClick={lossMatchRestart} >New Game</button>
                    <button className="btn btn-danger" onClick={lossMatchClose} >Close</button>
                </div>
            result = (playerColor === 'w') ? "Victory" : "Defeat";
            break;

        case gameEndStatusCode.CHECKMATE_BY_BLACK:
            text = (playerColor === 'b')
                ? <div>
                    <button className="btn btn-success" onClick={winMatchRestart} >New Game</button>
                    <button className="btn btn-danger" onClick={winMatchClose} >Close</button>
                </div>
                : <div>

                    <button className="btn btn-success" onClick={lossMatchRestart} >New Game</button>
                    <button className="btn btn-danger" onClick={lossMatchClose} >Close</button>

                </div>

            result = (playerColor === 'b') ? "Victory" : "Defeat";
            break;

        case gameEndStatusCode.STALEMATE:
            text = "The game has been drawn by stalemate";
            result = "Draw";
            break;

        case gameEndStatusCode.THREEFOLD_REP:
            text = "The game has been drawn by a three fold repetition";
            result = "Draw";
            break;

        case gameEndStatusCode.INSUFFICIENT_MAT:
            text = "The game has been drawn due to insufficient material";
            result = "Draw";
            break;

        case gameEndStatusCode.FIFTY_MOVE:
            text = "The game has been drawn due to the fifty move rule";
            result = "Draw";
            break;

        default: break;
    }

    return (
        <Modal className="settings-wrapper">
            <h2 style={{ margin: "2vh" }}>{result}</h2>
            <div style={{ margin: "2vh" }}>{text}</div>
            <div className="btn-row" style={{ margin: "2vh" }}>
                {/*
                <button className="btn btn-success" onClick={startNewGame}>New Game</button>

                <button className="btn btn-danger" onClick={closeModal}>Close</button>
                */}

            </div>
        </Modal>
    );
}

