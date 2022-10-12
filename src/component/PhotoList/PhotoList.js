import React, { Component } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem';

import api from '../Axios/api';

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
         return <div><h1>Loading</h1></div> 
        
        return <div> {
    this.state.photos.map( photo => <PhotoItem key={photo.id} photo={photo} />)
      }</div>;
    }
}   
    
export default PhotoList;
