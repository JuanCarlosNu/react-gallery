import React from 'react';
import { Link } from 'react-router-dom';

const PhotoItem = ({ photo }) => {
  return (
    <div>
     <div className='photo__img--container'>
         <img src={photo.urls.thumb} className='photo__img' alt={photo.alt_description}/>
      </div>
     <div className='photo__content'>
         <p className='photo__time' >{photo.created_at}</p>
         <p className='photo__time'>{photo.updated_at}</p>
         <p className='photo__likes'>{photo.likes}</p>
         <Link to={`/users/${photo.user.username}`} className='photo__user'>{photo.user.username}</Link>
      </div>
      <div className='photo__buttons'>
         <a className='photo__btn' href={photo.user.links.html}>{photo.user.name}</a>
         <a className='photo__btn' href={photo.links.html}>
            view image
         </a>
      </div>

    </div>
    );
};
 
export default PhotoItem;