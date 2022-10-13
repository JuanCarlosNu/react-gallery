import React, { Component } from 'react';

import api from '../Axios/api';

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

        if (!user) return "Loading";
 

        return (
            <div className='user__info'>
                <div className='user__content'>
                    <h1 className='user__title'>{user.name}</h1>
                    <p className='user__bio' >{user.value}</p>
                    <div className='user__img--container'>
                        <img src={user.profile_image? user.profile_image.large : ""} alt={user.name}  className='user__img' />
                            <a className='user__profile'></a>
                    </div>
                </div>
                <div className='user__photos--container'>
                    <p></p>
                    <div className='user__photos'></div>
                </div>
            </div>

            )

    }
}
 
export default UserInfo;

