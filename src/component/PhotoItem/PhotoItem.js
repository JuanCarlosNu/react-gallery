import React from 'react';

const PhotoItem = ({ photo }) => {
  return (
    <div>
     <div className='photo__img--container'>
         <img/>
      </div>
     <div className='photo__content'>
         <p className='photo__time'></p>
         <p className='photo__time'></p>
         <p className='photo__likes'></p>
         <p className='photo__user'></p>
      </div>
      <div className='photo__buttons'>
         <a className='photo__btn'></a>
         <a className='photo__btn'></a>
      </div>

    </div>
    );
};
 
export default PhotoItem;