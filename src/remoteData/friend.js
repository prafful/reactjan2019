import React from 'react';

class Friend extends React.Component {

    constructor(props){
        super(props)
        this.getFriendDetail = this.getFriendDetail.bind(this)
    }

    getFriendDetail(){
        console.log("Get friend detail!!!!" + this.props.myid)
        this.props.detail(this.props.myid)
    }
    
    render() { 
        return ( 
            <tr onClick={this.getFriendDetail}>
                <td>{this.props.nm}</td>
                <td>{this.props.em}</td>
            </tr>
         );
    }
}

export default Friend;
