import React, { Component } from 'react';
import axios from 'axios';
const API_KEY= "NtCC0KXu88qlLdrN_eers1JczYKsAdeYR1LipS7FH80"


class UserInfo extends Component {

    constructor(){
        super()
        this.state = {
            user: {}
          }
        }
     
       async componentDidMount(){
            const username = this.props.match.params.username;

            const user = await axios.get(`https://api.unsplash.com/users/${username}`, {
                headers: {
                    Authorization: "Client-ID " + API_KEY
                }
            });

            console.log(user);
            
        }

    render() { 
        return (
            <div>User</div>
            )

    }
}
 
export default UserInfo;

