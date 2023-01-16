import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Recipe_1 from '../img/Recipe card (1).png';
import Recipe_2 from '../img/Recipe card (2).png';
import Recipe_3 from '../img/Recipe card (3).png';
import Recipe_4 from '../img/Recipe card (4).png';
import { useDrop } from 'react-dnd';
import Picture from '../util/Picture';
import { BsFillBagPlusFill } from 'react-icons/bs';
const Images = [
	{
		id: 1,
		url: Recipe_1,
	},
	{
		id: 2,
		url: Recipe_2,
	},
	{
		id: 3,
		url: Recipe_3,
	},
	{
		id: 4,
		url: Recipe_4,
	},
];

const MealPlanner = () => {
	const [board, setBoard] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'image',
		drop: (item) => addImageToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addImageToBoard = (id) => {
		const pictureList = Images.filter((image) => id === image.id);
		setBoard((board) => [...board, pictureList[0]]);
  };
  
  const clearTable = () => {
    setBoard([])
  }

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<div className='d-flex'>
					<div
						className=''
						style={{
							marginRight: '200px',
							marginTop: '120px',
							marginLeft: '200px',
						}}
					>
						<div>
							<h2>Set a meal plan</h2>
						</div>

						<div className='mt-5'>
							<span>
								Add recipes to meal plan by dragging recipe items on the right
								into the
								<br /> dotted boxes for each day and meal type.
							</span>
						</div>

						<div className='mt-4'>
							<div className='bg-white border border-1 d-flex justify-content-between'>
								<h6 className=' m-3'>
									<b>Next week</b> - Nov 8 - Nov 14
								</h6>
								<div className='mt-3 me-4'>
									<IoIosArrowUp />
								</div>
							</div>
						</div>

						<div>
							<div className='my-5 d-flex justify-content-between'>
								<span
									className='rounded-pill p-1'
									style={{ backgroundColor: '#8CCA95' }}
								>
									Today
                </span>
                <span className='rounded-pill p-1 bg-danger' onClick={clearTable} style={{cursor:'pointer'}}>Clear board</span>
							</div>

							<div className='border-style d-flex flex-column' ref={drop}>
								<BsFillBagPlusFill />
								<h5>Add Meals here</h5>
								{board.map((picture) => (
									<Picture url={picture.url} id={[picture.id]} />
								))}
							</div>
						</div>
					</div>
					<div
						className=''
						style={{
							marginLeft: '200px',
							marginTop: '200px',
							marginRight: '150px',
						}}
					>
						<div>
							<h3>Recipes</h3>
						</div>

						<div>
							{Images.map((img) => {
								return (
									<Picture id={img.id} url={img.url} />
									
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MealPlanner;
