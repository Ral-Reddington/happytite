import React from 'react';
import HeroComponent from '../reuseable-components/HeroComponent'
import TrendingComponent from '../reuseable-components/TrendingComponent'
  
const HomePage = () => {
	return (
		<div className='m-5'>
      <HeroComponent />
      <TrendingComponent />
		</div>
	);
};

export default HomePage;
