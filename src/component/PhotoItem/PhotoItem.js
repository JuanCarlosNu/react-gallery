import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoItem.css';

const PhotoItem = ({ photo }) => {
  return (
    <div className='photo__item'>
     <div className='photo__img--container'>
         <img src={photo.urls.regular} className='photo__img' alt={photo.alt_description}/>
      </div>
     <div className='photo__content'>
         <p className='photo__time' >Created at: {photo.created_at}</p>
         <p className='photo__time'>Updated at: {photo.updated_at}</p>
         <p className='photo__likes'>{photo.likes} Likes</p>
         <Link to={`/users/${photo.user.username}`} className='photo__user'>
            By: {photo.user.username}</Link>
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