import React from 'react';
import nutriblogimage from '../img/nutriblogimage.svg';
import BlogPost from '../util/BlogPost';

const NutriBlogData = [
	{
		id: 1,
		userName: 'Racheal jones',
		userTitle: 'Nutritionist',
		content: 'Eat real food: How to eat a whole food, plant based diet.',
		date: 'Nov 20',
		img: nutriblogimage,
	},
	{
		id: 2,
		userName: 'Akabike Ebube',
		userTitle: 'Food Critic',
		content:
			'A beautiful tatse: The fact that food uses adjectives like taste.',
		date: 'Oct 22',
		img: nutriblogimage,
	},
	{
		id: 3,
		userName: 'Ekpo Edet',
		userTitle: 'Doctor',
		content: 'Healthy Eating: Ensure you eat your greens in your diet.',
		date: 'Sept 14',
		img: nutriblogimage,
	},
];

const Nutriblogcomponents = () => {
	return (
		<div className='mb-5' style={{ marginLeft: '200px', marginTop: '120px' }}>
			<h2 className='my-5'>Nutri blog</h2>
			<div className='d-flex'>
				{NutriBlogData.map((item) => (
					<BlogPost
						key={item.id}
						userName={item.userName}
						userTitle={item.userTitle}
						content={item.content}
						date={item.date}
						img={item.img}
					/>
				))}
			</div>
		</div>
	);
};

export default Nutriblogcomponents;

