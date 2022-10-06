import React, { Component } from 'react'
import axios from 'axios';
const API_KEY= "NtCC0KXu88qlLdrN_eers1JczYKsAdeYR1LipS7FH80"

class PhotoList extends Component {

    constructor() {
        super()
        this.state =  {
            photos: []
        }
    }
  
    async componentDidMount(){
         const { data : photos } = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                Authorization: "Client-ID " + API_KEY
            }
          
        });

        this.setState ({ 
            photos 
        })
    }
    render() {
        if(this.state.photos.length === 0) return <div><h1>Loading</h1></div> 
        
        return <div> {
    this.state.photos.map(photo => <div>{photo.id}</div>)
      }</div>;
    }
}   
    
export default PhotoList;
