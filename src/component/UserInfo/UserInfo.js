import React, { Component } from 'react';

import api from '../Axios/api';
import PhotoItem from '../PhotoItem/PhotoItem';

class UserInfo extends Component {

    constructor(){
        super()
        this.state = {
            user: {}
          };
        }
     
       async componentDidMount(){
            const username = this.props.match.params.username;

            const {data: user} = await api.get(`/users/${username}`);

            console.log(user);
            
            this.setState({ user });
            
        }

    render() {  
        const { user } = this.state;

        if (!user || !user.profile_image) return "Loading"; //solved adding the image loading to the condition.

        return (
            <div className='user__info'>
                <div className='user__content'>
                    <h1 className='user__title'>{user.name}</h1>
                    <p className='user__bio' >{user.bio}</p>
                    <div className='user__img--container'>
                        <img src={user.profile_image? user.profile_image.large : ""}
                         alt={user.name}  
                         className='user__img' />
                        <a href={user.links?user.links.html: ""} className='user__profile'>view Profile</a>
                    </div>
                </div>
                <div className='user__photos--container'>
                    <p>Images By: {user.name}</p>
                    <div className='user__photos'>
                     {user.photos.map(photo => (
                        <div key={photo.id}>
                            <img src={photo.urls.thumb} alt='user photos' />
                        </div> 
                     ))}
                    </div>
                </div>
            </div>

         )

    }
}
 
export default UserInfo;

