import React, { Component } from 'react';

import api from '../Axios/api';



class UserInfo extends Component {

    constructor(){
        super()
        this.state = {
            user: {}
          }
        }
     
       async componentDidMount(){
            const username = this.props.match.params.username;

            const user = await api.get(`/users/${username}`);

           // console.log(user);
            
            this.setState({ user });
            
        }

    render() {  
        const { user } = this.state;

        if (!user) return "Loading";
         
        console.log(user);

        return (
            <div className='user__info'>
                <div className='user__content'>
                    <h1 className='user__title'></h1>
                    <p className='user__bio'></p>
                    <div className='user__img--container'>
                        <img className='user__img' />
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

