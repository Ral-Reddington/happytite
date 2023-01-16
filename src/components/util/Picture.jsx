import React from 'react'
import { useDrag } from 'react-dnd';

const Picture = ( { id, url } ) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
		type: 'image',
    item: {id:id},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
  } ) );
  
  return <img ref={drag} src={url} alt="" srcset="" />
 
  
}

export default Picture