import React from 'react';


const PhotoForm = () => {
    return ( 
    <form>
        <select name='sortTerm' className='Select'>
            <option value="created_at">Created at</option>
            <option value="updated_at">Updated at</option>
            <option value="likes">Select Item</option>
        </select>
        <select>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    </form>
     );
}
 
export default PhotoForm;