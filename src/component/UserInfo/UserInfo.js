import React, { Component } from 'react';


class UserInfo extends Component {

    constructor(){
        super()
        this.state = {
            user: {}
          }
        }
     
        componentDidMount(){
            const username = this.props.match.params.username
             console.log(this.props)
        }

    render() { 
        return (
            <div>User</div>
            )

    }
}
 
export default UserInfo;

