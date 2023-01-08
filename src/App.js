import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import MealPlanner from './components/pages/MealPlanner';
import Navbar from './components/reuseable-components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div>
				<Routes>
          <Route path='/' element={<Home />} />
          <Route path='meal-planner' element={<MealPlanner />} />
				</Routes>
      </div>
		</React.Fragment>
	);
}

export default App;
