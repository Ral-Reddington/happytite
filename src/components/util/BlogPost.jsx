import React, { useState } from 'react'
import {
	BsFillBookmarkCheckFill,
	BsFillBookmarkDashFill,
} from 'react-icons/bs';


const BlogPost = ( { userName, userTitle, content, date, img } ) => {
  const [ bookmarkState, setBookmarkState ] = useState( false );
  const handleBookmark = () => {
		setBookmarkState(!bookmarkState);
	};
  return (
    <><div className='nutriblog-hover me-5 p-3'>
    <div className='d-flex  p-3'>
      <div className='me-5'>
        <span className='fw-light text-secondary'>
          {userName} · {userTitle}
        </span>
        <br />
        <span className='fw-bold'>
          {content}
        </span>
        <br />
        <span className='fw-light text-secondary'>
          {date} · 10 min read
        </span>
      </div>
      <div>
        <img src={img} alt='the-food' />
      </div>
    </div>
    <div>
      {!bookmarkState ? (
        <BsFillBookmarkDashFill onClick={handleBookmark} size={30}/>
      ) : (
        <BsFillBookmarkCheckFill onClick={handleBookmark} size={30}/>
      )}
    </div>
  </div></>
  )
}

export default BlogPost