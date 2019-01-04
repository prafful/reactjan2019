import React from 'react';
import axios from "axios";
import Friend from './friend';

class RestAPI extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            friends:[]
        }

        this.getRemoteData = this.getRemoteData.bind(this)

    }

    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData(){
        console.log("axios will call rest api now!")
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((responsedata)=>{
                console.log(this.state.friends)
                console.log(responsedata.data)
                this.setState({friends: responsedata.data})
                console.log("Dumping this.state.friends")
                console.log(this.state.friends)
            })
    }

    displayFriends(){
        console.log("Friends will be displayed here!!!!")
        return this.state.friends.map((f)=>{
            return (<Friend
                        key={f.id}
                        nm={f.name}
                        em={f.email}
                    ></Friend>)
        })
    }

    render() { 
        return (
            <div>
                Data will come from REST API!!!!
                Each friend detail will be displayed!!!!
                <table border="1">
                     {this.displayFriends()}
                </table>
               
            </div>
          );
    }
}
 
export default RestAPI;
