import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import './Leaderboard.css';
import { UserAuth } from '../../context/AuthContext';
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app';


export default function Leaderboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const usersRef = collection(db, "users");
            const querySnapshot = await getDocs(usersRef);
            const fetchedUsers = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            for (const user of fetchedUsers) {
                const now = new Date();
                const currentMonth = now.toLocaleString("default", { month: "long" }); // get the month name
                const currentYear = now.getFullYear();
                const userRef = doc(db, "users", user.id);

                // create a reference to the document for the current month
                const currentMonthDocRef = doc(userRef, currentYear + "-" + currentMonth, currentMonth);

                const currentMonthDocSnapshot = await getDoc(currentMonthDocRef);

                if (currentMonthDocSnapshot.exists()) {
                    const eloRating = currentMonthDocSnapshot.get("eloRating");
                    console.log("eloRating for", user.username, ":", eloRating);
                    user.eloRating = eloRating;
                } else {
                    console.log("No data found for", user.username, "in", currentYear, currentMonth);
                    user.eloRating = 0;
                }
            }

            const sortedUsers = fetchedUsers.sort((a, b) => b.eloRating - a.eloRating);
            setUsers(sortedUsers);
        }
        fetchUsers();
    }, []);

    // create a new array with the eloRating included
    const tableData = users.map((user, index) => ({ rank: index + 1, username: user.username, eloRating: user.eloRating }));

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Elo Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.rank}</td>
                            <td>{user.username}</td>
                            <td>{user.eloRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}