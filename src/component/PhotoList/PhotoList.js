import React, { Component } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem';

import api from '../Axios/api';
import PhotoForm from '../PhotoForm/PhotoForm';

class PhotoList extends Component {

    constructor() {
        super()
        this.state =  {
            photos: []
        }
    }
  
    async componentDidMount(){
         const { data : photos } = await api.get("/photos");

        this.setState ({ 
            photos 
        })

        console.log(photos);
    }


    render() {
        if(this.state.photos.length === 0)
         return <div className='Loading'>Loading</div> 
        
        return (
            <React.Fragment>
            <PhotoForm />
          <div> 
            {this.state.photos.map( photo =>(
              <PhotoItem key={photo.id} photo={photo} />
            ))}
            </div>
            </React.Fragment>
        );
    }
}   
    
export default PhotoList;
