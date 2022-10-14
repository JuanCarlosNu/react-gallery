import React from 'react';


const PhotoForm = ({onchange}) => {
    return ( 
    <form>
        <select onChange={onchange} name='sortTerm' className='Select'>
            <option >Select Item</option>
            <option value="created_at">Created at</option>
            <option value="updated_at">Updated at</option>
            <option value="likes">Likes</option>
        </select>
        <select onChange={onchange} name='sortOrder' className='select'>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    </form>
     );
}
 
export default PhotoForm;