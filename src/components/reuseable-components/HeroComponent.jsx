import React from 'react'
import heroImage from '../img/hero-image-food.svg';


const HeroComponent = () => {
  return (
    <>
      <div className='row gx-5'>
				<div className='col'>
					<h1>The best place to get healthy</h1>
					<h1>Recipes.</h1>
					<p>
						Countless healthy recipes to choose from to customize meal plans
						just for you according to any diet you want.
					</p>
					<div className='d-flex'>
						<button className='button1'>Create meal plan</button>
						<button>Explore recipes</button>
					</div>
					{/* Companies that trust us */}
					<div>
						<h4>Companies that trust us</h4>
						<div className='row'>
							<div className='col-4'>item X</div>
							<div className='col-4'>item Y</div>
							<div className='col-4'>item Z</div>
						</div>
						<div className='row'>
							<div className='col-4'>item A</div>
							<div className='col-4'>item B</div>
							<div className='col-4'>item C</div>
						</div>
					</div>
					{/* Companies that trust us */}
				</div>
				<div className='col'>
					<img src={heroImage} alt='' srcset='' />
				</div>
			</div>
    </>
  )
}

export default HeroComponent