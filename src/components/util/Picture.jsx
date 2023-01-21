import React from 'react'
import { useDrag } from 'react-dnd';

const Picture = ( { id, url } ) => {
  //react dnd code snippet drag
  const [{ isDragging }, drag] = useDrag(() => ({
		type: 'image',
    item: {id:id},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
  } ) ); //react dnd code snippet drag
  
  return <img ref={drag} src={url} alt="" srcset="" />
 
  
}

export default Picture