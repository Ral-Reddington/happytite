import React, { useState } from 'react';
import nutriblogimage from '../img/nutriblogimage.svg';
import bookmarkiconactive from '../img/bookmarkiconactive.png';
import Bookmarkicondefault from '../img/Bookmarkicondefault.svg';

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
	const [bookmarkState, setBookmarkState] = useState(false);
	// const [blogHoverState, setBlogHoverState] = useState(false);
	const handleBookmark = (id) => {
		console.log(id);
		// setBookmarkState(!bookmarkState);
	};
	// let divStyle = {
	//   backgroundColor: "",
	// };
	// const handleHoverState = (e) => {
	//   e.target.style.background = "red";
	// };

	// const handleHoverStateOut = (e) => {
	//   e.target.style.background = "";
	// };

	// if (blogHoverState) {
	//   divStyle.backgroundColor = "red";
	// } else {
	//   divStyle.backgroundColor = "";
	// }

	return (
		<div className='' style={{ marginLeft: '200px', marginTop: '120px' }}>
			<h2 className='my-5'>Nutri blog</h2>
			<div className='d-flex'>
				{NutriBlogData.map((el) => {
					return (
						<div
							key={el.id}
							className='nutriblog-hover'
							
						>
							<div className='d-flex  p-3'>
								<div className='me-5'>
									<span className='fw-light text-secondary'>
										{el.userName} · {el.userTitle}
									</span>
									<br />
									<span className='fw-bold'>{el.content}</span>
									<br />
									<span className='fw-light text-secondary'>
										{el.date} · 10 min read
									</span>
								</div>
								<div>
									<img src={el.img} alt='the-food' />
								</div>
							</div>
							<div onClick={handleBookmark(el.id)}>
								{!bookmarkState ? (
									<img src={Bookmarkicondefault} alt='the-book-mark-d' />
								) : (
									<img src={bookmarkiconactive} alt='the-book-mark-a' />
								)}
							</div>
						</div>
					);
				})}

				{/* <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>
        <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>{" "}
        <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>{" "} 
        {bookmarkState ? (
								<img
									onClick={handleBookmark}
									src={bookmarkiconactive}
									alt='the-book-mark-a'
								/>
							) : (
								<img
									onClick={handleBookmark}
									src={Bookmarkicondefault}
									alt='the-book-mark-d'
								/>
							)}
        */}
			</div>
		</div>
	);
};

export default Nutriblogcomponents;
