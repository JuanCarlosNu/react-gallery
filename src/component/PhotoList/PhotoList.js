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
         const data = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                Authorization: "Client-ID " + API_KEY
            }
          
        });
        console.log(data);
    }
    render() { 
        return (
           <div>PhotoList </div>
        );
    }
}
 
export default PhotoList;
