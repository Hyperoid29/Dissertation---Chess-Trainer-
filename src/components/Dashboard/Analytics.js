import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { arrayUnion, doc, updateDoc, increment, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import "./Analytics.css";

/*
function fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses) {
    const now = new Date();
    const currentMonth = now.toLocaleString("default", { month: "long" }); // get the month name
    const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
    const currentYear = now.getFullYear();
    const userCollectionRef = collection(db, "users");
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
    const dayDataRef = doc(userDataRef, `${currentDate}`);

    getDoc(dayDataRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setTotalMatches(data.matches || 0);
                setTotalWins(data.wins || 0);
                setTotalLosses(data.losses || 0);
            } else {
                console.log("No data found for today.");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

export default function Analytics() {
    const [totalMatches, setTotalMatches] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses);
        }
    }, [user]);

    const chartOptions = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Total Matches", "Total Wins", "Total Losses"],
        },
        yaxis: {
            title: {
                text: "Number of matches",
            },
        },
        fill: {
            opacity: 1,
            colors: ["#28a745", "#ffc107", "#dc3545"],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    };

    const chartSeries = [
        {
            name: "matches",
            data: [totalMatches, totalWins, totalLosses],
        },
    ];

    return (
        <>
            {saved ? (
                <div>
                    <p>Total Matches: {totalMatches}</p>
                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        width="100%"
                    />
                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/



/*
function fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses) {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
    const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
    const currentYear = now.getFullYear();
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
    const dayDataRef = doc(userDataRef, `${currentDate}`);

    getDoc(dayDataRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setTotalMatches(data.matches || 0);
                setTotalWins(data.wins || 0);
                setTotalLosses(data.losses || 0);
            } else {
                console.log("No data found for today.");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

function StatsButton({ user, fetchStats }) {
    const handleClick = () => {
        fetchStats(user);
    };

    return (
        <button onClick={handleClick}>Get Stats</button>
    );
}

export default function Analytics() {
    const [totalMatches, setTotalMatches] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses);
        }
    }, [user]);

    useEffect(() => {
        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 350
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "5%",
                    endingShape: "rounded"
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: ["Stats"]
            },
            yaxis: {
                title: {
                    text: "Number of Matches"
                }
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        });
    }, []);

    const chartSeries = [
        {
            name: "Matches",
            data: [totalMatches]
        },
        {
            name: "Wins",
            data: [totalWins]
        },
        {
            name: "Losses",
            data: [totalLosses]
        }
    ];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
                    <StatsButton user={user} fetchStats={fetchUserStats} />
                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/

/*
function fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses, setMarch29Matches, setMarch29Wins, setMarch29Losses) {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
    const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
    const currentYear = now.getFullYear();
    const userCollectionRef = collection(db, 'users'); // /users
    const userDocRef = doc(userCollectionRef, user.email); ///users/username@gmail.com
    const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`); ///users/username@gmail.com/2023-April
    const dayDataRef = doc(userDataRef, `${currentDate}`); ///users/username@gmail.com/2023-April/1 April
    const userMarch29DatRef = collection(userDocRef, '2023-March'); ///users/username@gmail.com/2023-March
    const march29DataRef = doc(userMarch29DatRef, '29 March'); // 

    Promise.all([getDoc(dayDataRef), getDoc(march29DataRef)])
        .then((docSnapshots) => {
            let totalMatches = 0;
            let totalWins = 0;
            let totalLosses = 0;
            let march29Matches = 0;
            let march29Wins = 0;
            let march29Losses = 0;

            docSnapshots.forEach((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    if (docSnapshot.id === currentDate) {
                        totalMatches += data.matches || 0;
                        totalWins += data.wins || 0;
                        totalLosses += data.losses || 0;
                    } else if (docSnapshot.id === '29 March') {
                        march29Matches += data.matches || 0;
                        march29Wins += data.wins || 0;
                        march29Losses += data.losses || 0;
                    }
                } else {
                    console.log("No data found for today.");
                }
            });

            setTotalMatches(totalMatches);
            setTotalWins(totalWins);
            setTotalLosses(totalLosses);
            setMarch29Matches(march29Matches);
            setMarch29Wins(march29Wins);
            setMarch29Losses(march29Losses);
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}



export default function Analytics() {
    const [totalMatches, setTotalMatches] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [March29Matches, setMarch29Matches] = useState(0);
    const [March29Wins, setMarch29Wins] = useState(0);
    const [March29Losses, setMarch29Losses] = useState(0);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses, setMarch29Matches, setMarch29Wins, setMarch29Losses);
        }
    }, [user]);

    useEffect(() => {
        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 100
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "5%",
                    endingShape: "rounded"
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: ["Stats"]
            },
            yaxis: {
                title: {
                    text: "Scores"
                }
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        });
    }, []);

    const chartSeries = [{
        name: "Matches", data: [totalMatches, March29Matches]
    },
    {
        name: "Wins",
        data: [totalWins, March29Wins]
    },
    {
        name: "Losses",
        data: [totalLosses, March29Losses]
    }
    ];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />


                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/

/*
function fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses) {
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, '2023-April');

    const promises = [];

    for (let i = 1; i <= 30; i++) { // iterate through all days of April
        const dayDataRef = doc(userDataRef, `${i} April`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = [];
            let wins = [];
            let losses = [];

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches[index] = data.matches || 0;
                    wins[index] = data.wins || 0;
                    losses[index] = data.losses || 0;
                } else {
                    console.log(`No data for April ${index + 1}`);
                }
            });

            setDailyMatches(matches);
            setDailyWins(wins);
            setDailyLosses(losses);
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}
export default function Analytics() {
    const [dailyMatches, setDailyMatches] = useState([]);
    const [dailyWins, setDailyWins] = useState([]);
    const [dailyLosses, setDailyLosses] = useState([]);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses);
        }
    }, [user]);

    useEffect(() => {
        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 350
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "5%",
                    endingShape: "rounded"
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: Array.from({ length: 30 }, (_, i) => i + 1), // create an array of days from 1 to 30
            },
            yaxis: {
                title: {
                    text: "Number of Matches"
                }
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        });
    }, []);

    const chartSeries = [
        {
            name: "Matches",
            data: dailyMatches
        },
        {
            name: "Wins",
            data: dailyWins
        },
        {
            name: "Losses",
            data: dailyLosses
        }
    ];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />

                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/

/*
function fetchUserStats(user, setTotalMatches, setTotalWins, setTotalLosses) {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
    const currentYear = now.getFullYear();
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);

    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const promises = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDataRef = doc(userDataRef, `${i} ${currentMonth}`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = 0;
            let wins = 0;
            let losses = 0;

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches += data.matches || 0;
                    wins += data.wins || 0;
                    losses += data.losses || 0;
                } else {
                    const date = new Date(`${currentMonth} ${index + 1}, ${currentYear}`);
                    if (date < currentDate) {
                        // Previous day, no data available
                        console.log(`No data for ${date.toLocaleDateString()}`);
                    } else {
                        // Upcoming day, no data available yet
                        console.log(`No data yet for ${date.toLocaleDateString()}`);
                    }
                }
            });

            setTotalMatches(matches);
            setTotalWins(wins);
            setTotalLosses(losses);
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

export default function Analytics() {
    const [totalMatchesApril1, setTotalMatchesApril1] = useState(0);
    const [totalWinsApril1, setTotalWinsApril1] = useState(0);
    const [totalLossesApril1, setTotalLossesApril1] = useState(0);
    const [totalMatchesApril2, setTotalMatchesApril2] = useState(0);
    const [totalWinsApril2, setTotalWinsApril2] = useState(0);
    const [totalLossesApril2, setTotalLossesApril2] = useState(0);
    const [totalMatchesUpcomingDays, setTotalMatchesUpcomingDays] = useState(0);
    const [totalWinsUpcomingDays, setTotalWinsUpcomingDays] = useState(0);
    const [totalLossesUpcomingDays, setTotalLossesUpcomingDays] = useState(0);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setTotalMatchesApril1, setTotalWinsApril1, setTotalLossesApril1, "2022-04-01");
            fetchUserStats(user, setTotalMatchesApril2, setTotalWinsApril2, setTotalLossesApril2, "2022-04-02");
            fetchUserStats(user, setTotalMatchesUpcomingDays, setTotalWinsUpcomingDays, setTotalLossesUpcomingDays, "2022-04-03", "2022-04-30");
        }
    }, [user]);

    useEffect(() => {
        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 350
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "5%",
                    endingShape: "rounded"
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: ["April 1", "April 2", "Upcoming Days"]
            },
            yaxis: {
                title: {
                    text: "Number of Matches"
                }
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        });
    }, []);

    const chartSeries = [
        {
            name: "Matches",
            data: [totalMatchesApril1, totalMatchesApril2, totalMatchesUpcomingDays]
        },
        {
            name: "Wins",
            data: [totalWinsApril1, totalWinsApril2, totalWinsUpcomingDays]
        },
        {
            name: "Losses",
            data: [totalLossesApril1, totalLossesApril2, totalLossesUpcomingDays]
        }
    ];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/

/*
function fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses) {
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, '2023-April');

    const promises = [];

    for (let i = 1; i <= 30; i++) {
        const dayDataRef = doc(userDataRef, `${i} April`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = [];
            let wins = [];
            let losses = [];

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches.push(data.matches || 0); // modify the array to add data for each day
                    wins.push(data.wins || 0);
                    losses.push(data.losses || 0);
                } else {
                    console.log(`No data for April ${index + 1}`);
                    matches.push(0); // add 0 to the array for the missing day
                    wins.push(0);
                    losses.push(0);
                }
            });

            setDailyMatches(matches);
            setDailyWins(wins);
            setDailyLosses(losses);
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

export default function Analytics() {
    const [dailyMatches, setDailyMatches] = useState([]);
    const [dailyWins, setDailyWins] = useState([]);
    const [dailyLosses, setDailyLosses] = useState([]);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses);
        }
    }, [user]);

    useEffect(() => {
        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 350,
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "40%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 5,
                colors: ["transparent"],
            },
            xaxis: {
                categories: Array.from({ length: 30 }, (_, i) => i + 1),
            },
            yaxis: {
                title: {
                    text: "Number of Matches",
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        });
    }, []);

    const chartSeries = [{ name: "Matches", data: dailyMatches, }, { name: "Wins", data: dailyWins, }, { name: "Losses", data: dailyLosses, },];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}

*/



/*

function fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions) {
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, '2023-April');

    const promises = [];

    for (let i = 1; i <= 30; i++) {
        const dayDataRef = doc(userDataRef, `${i} April`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = [];
            let wins = [];
            let losses = [];
            let categories = [];

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches.push(data.matches || 0);
                    wins.push(data.wins || 0);
                    losses.push(data.losses || 0);
                    categories.push(docSnapshot.id);
                } else {
                    console.log(`No data for April ${index + 1}`);
                    matches.push(0);
                    wins.push(0);
                    losses.push(0);
                    categories.push(`${index + 1} April`);
                }
            });

            setDailyMatches(matches);
            setDailyWins(wins);
            setDailyLosses(losses);

            setChartOptions({
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: 350,
                },
                colors: ['#008FFB', '#00E396', '#FEB019'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '40%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent'],
                },
                xaxis: {
                    categories: categories,
                },
                yaxis: {
                    title: {
                        text: 'Number of Matches',
                    },
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
            });
        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
}
export default function Analytics() {
    const [dailyMatches, setDailyMatches] = useState([]);
    const [dailyWins, setDailyWins] = useState([]);
    const [dailyLosses, setDailyLosses] = useState([]);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions);
        }
    }, [user]);

    useEffect(() => {
        const categories = dailyMatches.map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            return `${day} ${month}`;
        });

        setChartOptions({
            chart: {
                type: "bar",
                stacked: true,
                height: 350,
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "40%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 5,
                colors: ["transparent"],
            },
            xaxis: {
                categories: categories,
                title: {
                    text: "Document Name",
                },
            },
            yaxis: {
                title: {
                    text: "Number of Matches",
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        });
    }, [dailyMatches]);


    const chartSeries = [
        { name: "Matches", data: dailyMatches },
        { name: "Wins", data: dailyWins },
        { name: "Losses", data: dailyLosses },
    ];

    return (
        <>
            {saved ? (
                <div>
                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        height={350}
                    />
                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
        </>
    );
}
*/

/*

function fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions) {
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const userDataRef = collection(userDocRef, `2023-${currentMonth}`);

    const promises = [];

    for (let i = 1; i <= 30; i++) {
        const dayDataRef = doc(userDataRef, `${i} ${currentMonth}`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = [];
            let wins = [];
            let losses = [];
            let categories = [];

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches.push(data.matches || 0);
                    wins.push(data.wins || 0);
                    losses.push(data.losses || 0);
                    categories.push(docSnapshot.id);
                } else {
                    console.log(`No data for ${currentMonth} ${index + 1}`);
                    matches.push(0);
                    wins.push(0);
                    losses.push(0);
                    categories.push(`${index + 1} ${currentMonth}`);
                }
            });

            setDailyMatches(matches);
            setDailyWins(wins);
            setDailyLosses(losses);

            setChartOptions({
                chart: {
                    type: 'line',
                    height: 350,
                },
                colors: ['#008FFB', '#00E396', '#FEB019'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                xaxis: {
                    categories: categories,
                    title: {
                        text: 'Document Name',
                    },
                },
                yaxis: {
                    title: {
                        text: 'Number of Matches',
                    },
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
                legend: {
                    markers: {
                        fillColors: ['#008FFB', '#00E396', '#FEB019'],
                    },
                    labels: {
                        colors: ['#008FFB', '#00E396', '#FEB019'],
                        useSeriesColors: false,
                        formatter: function (seriesName, opts) {
                            return ["Matches", "Wins", "Losses"][opts.seriesIndex];
                        },
                    },
                },
            });
        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
}
export default function Analytics() {
    const [dailyMatches, setDailyMatches] = useState([]);
    const [dailyWins, setDailyWins] = useState([]);
    const [dailyLosses, setDailyLosses] = useState([]);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions);
        }
    }, [user]);

    useEffect(() => {
        const categories = dailyMatches.map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            return `${day} ${month}`;
        });

        setChartOptions({
            chart: {
                type: 'line',
                height: 350,
            },
            colors: ['#008FFB', '#00E396', '#FEB019'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            xaxis: {
                categories: categories,
                title: {
                    text: 'Document Name',
                },
            },
            yaxis: {
                title: {
                    text: 'Number of Matches',
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            legend: {
                markers: {
                    fillColors: ['#008FFB', '#00E396', '#FEB019'],
                },
                labels: {
                    colors: ['#008FFB', '#00E396', '#FEB019'],
                    useSeriesColors: false,
                    formatter: function (seriesName, opts) {
                        return ["Matches", "Wins", "Losses"][opts.seriesIndex];
                    },
                },
            },
        });
    }, [dailyMatches]);


    const chartSeries = [
        { name: "Matches", data: dailyMatches },
        { name: "Wins", data: dailyWins },
        { name: "Losses", data: dailyLosses },
    ];

    return (
        <>
            {saved ? (
                <div>

                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        height={350}
                    />


                </div>
            ) : (
                <p>Please log in to see your stats.</p>
            )}
            <body>
                <div id="wrapper">
                    <div class="content-area">
                        <div class="container-fluid">
                            <div class="text-right mt-3 mb-3 d-fixed">
                                <a
                                    href="https://github.com/apexcharts/apexcharts.js/tree/master/samples/vanilla-js/dashboards/dark"
                                    target="_blank"
                                    class="btn btn-outline-warning mr-2"
                                >
                                    <span class="btn-text">View Code</span>
                                </a>
                            </div>
                            <div class="main">
                                <div class="row sparkboxes mt-4">
                                    <div class="col-md-3">
                                        <div class="box box1">
                                            <div class="details">
                                                <h3>1213</h3>
                                                <h4>WINS</h4>
                                            </div>
                                            <div id="spark1"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="box box2">
                                            <div class="details">
                                                <h3>3</h3>
                                                <h4>LOSS</h4>
                                            </div>
                                            <div id="spark2"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="box box3">
                                            <div class="details">
                                                <h3>311</h3>
                                                <h4>TOTAL MATCHES</h4>
                                            </div>
                                            <div id="spark3"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="box box4">
                                            <div class="details">
                                                <h3>22</h3>
                                                <h4>CURRENT STATS</h4>
                                            </div>
                                            <div id="spark4"></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js"></script>
                <script src="../../../../dist/apexcharts.js"></script>
                <script src="assets/scripts.js"></script>
            </body>
        </>
    );
}

*/






function fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions) {
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const userDataRef = collection(userDocRef, `2023-${currentMonth}`);

    const promises = [];

    for (let i = 1; i <= 30; i++) {
        const dayDataRef = doc(userDataRef, `${i} ${currentMonth}`);
        promises.push(getDoc(dayDataRef));
    }

    Promise.all(promises)
        .then((docsSnapshot) => {
            let matches = [];
            let wins = [];
            let losses = [];
            let categories = [];

            docsSnapshot.forEach((docSnapshot, index) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    matches.push(data.matches || 0);
                    wins.push(data.wins || 0);
                    losses.push(data.losses || 0);
                    categories.push(docSnapshot.id);
                } else {
                    console.log(`No data for ${currentMonth} ${index + 1}`);
                    matches.push(0);
                    wins.push(0);
                    losses.push(0);
                    categories.push(`${index + 1} ${currentMonth}`);
                }
            });

            setDailyMatches(matches);
            setDailyWins(wins);
            setDailyLosses(losses);

            setChartOptions({
                xaxis: {
                    categories: categories,
                    title: {
                        text: 'Current Date',
                    },
                },
                yaxis: {
                    title: {
                        text: 'Number of Matches',
                    },
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
                legend: {
                    markers: {
                        fillColors: ['#008FFB', '#00E396', '#FEB019'],
                    },
                    labels: {
                        colors: ['#008FFB', '#00E396', '#FEB019'],
                        useSeriesColors: false,
                        formatter: function (seriesName, opts) {
                            return ["Matches", "Wins", "Losses"][opts.seriesIndex];
                        },
                    },
                },
            });





        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
}




function fetchCurrentTotalStats(user, setTotalMatches, setTotalWins, setTotalLosses) {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' }); // get the month name
    const currentDate = `${now.getDate()} ${currentMonth}`; // combine the date and month
    const currentYear = now.getFullYear();
    const userCollectionRef = collection(db, 'users');
    const userDocRef = doc(userCollectionRef, user.email);
    const userDataRef = collection(userDocRef, `${currentYear}-${currentMonth}`);
    const dayDataRef = doc(userDataRef, `${currentDate}`);

    getDoc(dayDataRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setTotalMatches(data.matches || 0);
                setTotalWins(data.wins || 0);
                setTotalLosses(data.losses || 0);
            } else {
                console.log("No data found for today.");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}


export default function Analytics() {
    const [dailyMatches, setDailyMatches] = useState([]);
    const [dailyWins, setDailyWins] = useState([]);
    const [dailyLosses, setDailyLosses] = useState([]);
    const [saved, setSaved] = useState(false);
    const [chartOptions, setChartOptions] = useState({});




    const [totalMatches, setTotalMatches] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);

    const { user } = UserAuth();

    useEffect(() => {
        if (user?.email) {
            setSaved(true);
            fetchUserStats(user, setDailyMatches, setDailyWins, setDailyLosses, setChartOptions);
            fetchCurrentTotalStats(user, setTotalMatches, setTotalWins, setTotalLosses);
        }
    }, [user]);

    useEffect(() => {
        const categories = dailyMatches.map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            return `${day} ${month}`;
        });

        setChartOptions({

            colors: ['#008FFB', '#00E396', '#FEB019'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            xaxis: {
                categories: categories,
                title: {
                    text: 'Document Name',
                },
            },
            yaxis: {
                title: {
                    text: 'Number of Matches',
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            legend: {
                markers: {
                    fillColors: ['#008FFB', '#00E396', '#FEB019'],
                },
                labels: {
                    colors: ['#008FFB', '#00E396', '#FEB019'],
                    useSeriesColors: false,
                    formatter: function (seriesName, opts) {
                        return ["Matches", "Wins", "Losses"][opts.seriesIndex];
                    },
                },
            },
        });
    }, [dailyMatches]);

    const setPieChartOptions = {
        chart: {
            type: "donut",
        },
        labels: ["Total Wins", "Total Losses"],
        series: [totalWins, totalLosses],
        colors: ["#28a745", "#dc3545"],

        dataLabels: {
            enabled: true,
        },
        style: {
            colors: ["blue"], // set the color of the legend text
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontWeight: 900,
            labels: {
                colors: ['white'],
                fontWeight: 600, // set the color of the legend text
            },
        },
    };
    const setBarChartOptions = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: true,
            },
            labels: {
                colors: ['white'], // set the color of the legend text
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Total Matches", "Total Wins", "Total Losses"],
            labels: {
                style: {
                    colors: ['white', 'white', 'white'],// set the color of the x-axis labels
                    fontWeight: 600,
                },
            },
        },
        yaxis: {
            title: {
                text: "Number of matches",
                style: {
                    color: 'white', // set the color of the y-axis title
                    fontWeight: 600, // or any other valid CSS font weight value
                }

            },
            labels: {
                style: {
                    colors: ['white'], // set the color of the y-axis labels
                    fontWeight: 600,
                },
            },
        },
        fill: {
            opacity: 1,
            colors: ["#28a745", "#ffc107", "#dc3545"],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    };




    const chartSeriesBarChart = [
        {
            name: "matches",
            data: [totalMatches, totalWins, totalLosses],
        },
    ];
    const chartSeries = [
        { name: "Matches", data: dailyMatches },
        { name: "Wins", data: dailyWins },
        { name: "Losses", data: dailyLosses },
    ];



    return (
        <>
            {saved ? (
                <div>

                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        height={350}
                    />

                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="line"
                        height={350}
                    />



                    <body>
                        <div id="wrapper">
                            <div class="content-area">
                                <div class="container-fluid">
                                    <div class="text-right mt-3 mb-3 d-fixed">
                                        <div class="dropdownList">
                                            <MDBDropdown>
                                                <MDBDropdownToggle tag='a' className='btn btn-primary'>
                                                    Current Stats
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu>
                                                    <MDBDropdownItem link href='/totalanalytics'>Total Stats</MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </div>
                                    </div>
                                    <h3><center>Daily Stats</center></h3>
                                    <div class="main">
                                        <div class="row sparkboxes mt-4">
                                            <div class="col-md-3">
                                                <div class="box box1">
                                                    <div class="details">
                                                        <h3>{totalWins}</h3>
                                                        <h4>WINS</h4>
                                                    </div>
                                                    <div id="spark1"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box2">
                                                    <div class="details">
                                                        <h3>{totalLosses}</h3>
                                                        <h4>LOSS</h4>
                                                    </div>
                                                    <div id="spark2"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box3">
                                                    <div class="details">
                                                        <h3>{totalMatches}</h3>
                                                        <h4>TOTAL MATCHES</h4>
                                                    </div>
                                                    <div id="spark3"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box4">
                                                    <div class="details">
                                                        <h3>{totalLosses === 0 ? (
                                                            <p>No losses recorded.</p>
                                                        ) : (
                                                            <h3>{(totalWins / totalLosses).toFixed(2)}</h3>
                                                        )}</h3>
                                                        <h4>WIN/LOSS RATIO</h4>
                                                    </div>
                                                    <div id="spark4"></div>
                                                </div>
                                            </div>


                                            <div class="col-md-3">
                                                <div class="percentage-container">
                                                    <div class="box box5">
                                                        <div class="details">
                                                            <h3>{(totalWins / totalMatches * 100).toFixed(2)} %</h3>
                                                            <h4>WIN PERCENTAGE</h4>
                                                        </div>
                                                        <div id="spark5"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="chart-container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="pie-chart-layout">
                                                    <div class="card shadow-sm" style={{ backgroundColor: '#2B2D3E' }}>

                                                        <div class="card-body">
                                                            <div class="chart-widget p-3">
                                                                <ReactApexChart
                                                                    options={setPieChartOptions}
                                                                    series={setPieChartOptions.series}
                                                                    type="donut"
                                                                    height={300}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="bar-chart-layout">
                                                    <div class="card shadow-sm" style={{ backgroundColor: '#2B2D3E' }}>
                                                        <div class="card-body">
                                                            <div class="chart-widget p-3">
                                                                <ReactApexChart
                                                                    options={setBarChartOptions}
                                                                    series={chartSeriesBarChart}
                                                                    type="bar"
                                                                    height={290}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>














                                </div>
                            </div>
                        </div>

                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js"></script>
                        <script src="../../../../dist/apexcharts.js"></script>
                        <script src="assets/scripts.js"></script>
                    </body >


                </div >
            ) : (
                <p>Please log in to see your stats.</p>
            )
            }

        </>
    );
}

