import React, { Component } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem';

import api from '../Axios/api';
import PhotoForm from '../PhotoForm/PhotoForm';
import lodash from 'lodash';

class PhotoList extends Component {

    constructor() {
        super()
        this.state =  {
            photos: [],
            sortTerm: '',
            sortOrder: 'asc'
        };
    }
  
    async componentDidMount(){
         const { data : photos } = await api.get("/photos");

        this.setState ({ 
            photos 
        })

        console.log(photos);
    }


    render() {

        const sorted = lodash.orderBy(this.state.photos, [this.state.sortTerm], [this.state.sortOrder] )
        if(this.state.photos.length === 0)
         return <div className='Loading'>Loading</div> 
        
        return (
            <React.Fragment>
            <PhotoForm />
          <div> 
            {sorted.map( photo =>(
              <PhotoItem key={photo.id} photo={photo} />
            ))}
            </div>
            </React.Fragment>
        );
    }
}   
    
export default PhotoList;
