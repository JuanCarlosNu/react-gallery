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

            console.log(user);
            
        }

    render() { 
        return (
            <div>User</div>
            )

    }
}
 
export default UserInfo;

