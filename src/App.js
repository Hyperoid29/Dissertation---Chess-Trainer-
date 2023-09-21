import React, { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer'

import { AuthContextProvider } from './context/AuthContext';


const Home = lazy(() => import('./components/Home/Home'));

const HumanVsEngine = lazy(() => import('./components/Game/HumanVsEngine'));
const HumanVsEngineRanked = lazy(() => import('./components/Game/HumanVsEngineRanked'));
const Analysis = lazy(() => import('./components/Game/Analysis'));
const Watch = lazy(() => import('./components/Watch/Watch'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const Login = lazy(() => import('./components/Login/Login'));
const Analytics = lazy(() => import('./components/Dashboard/Analytics'));
const TotalAnalytics = lazy(() => import('./components/Dashboard/TotalAnalytics'));
const Guide = lazy(() => import('./components/Guide/GuidePage'));
const PieceMove = lazy(() => import('./components/Guide/PieceMove/PieceMove'));
const ChessOpenings = lazy(() => import('./components/Guide/ChessOpenings/ChessOpenings'));
const ForumPage = lazy(() => import('./components/ForumPage/ForumPage'));
const CreateNewPost = lazy(() => import('./components/ForumPage/CreateNewPost'));
const ForumPageSub = lazy(() => import('./components/ForumPage/ForumPageSub'));
const Profile = lazy(() => import('./components/Profile/Profile'));
function App() {
	return (
		<Router>
			<div className="App">
				<div className="gradient__bg">

					<Navbar />
					<main>
						<ToastContainer />
						<Suspense>

							<Routes>
								<Route exact path="/" element={<Home />} />
								<Route exact path="/ai" element={<HumanVsEngine />} />
								<Route exact path="/ranked" element={<HumanVsEngineRanked />} />
								<Route exact path="/analysis" element={<Analysis />} />
								<Route exact path="/watch" element={<Watch />} />
								<Route exact path="/faq" element={<FAQ />} />
								<Route exact path="/leaderboard" element={<Leaderboard />} />
								<Route exact path="/login" element={<Login />} />
								<Route exact path="/analytics" element={<Analytics />} />
								<Route exact path="/totalanalytics" element={<TotalAnalytics />} />
								<Route exact path="/guide" element={<Guide />} />
								<Route exact path="/piecemove" element={<PieceMove />} />
								<Route exact path="/chessopen" element={<ChessOpenings />} />
								<Route exact path="/forumpage" element={<ForumPage />} />
								<Route exact path="/createnewpost" element={<CreateNewPost />} />
								<Route exact path="/forumpagesub/:id" element={<ForumPageSub />} />
								<Route exact path="/profile" element={<Profile />} />
							</Routes>


						</Suspense>
					</main>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
