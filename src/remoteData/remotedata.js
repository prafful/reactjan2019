import React from 'react';
import axios from "axios";
import Friend from './friend';

class RestAPI extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            friends:[],
            name:"",
            description:"",
            upvote:0,
            downvote:0
        }

        this.getRemoteData = this.getRemoteData.bind(this)
        this.displayDetail = this.displayDetail.bind(this)
        this.getName = this.getName.bind(this)
        this.getDesc = this.getDesc.bind(this)
        this.getUp = this.getUp.bind(this)
        this.getDown = this.getDown.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData(){
        console.log("axios will call rest api now!")
        axios.get("http://localhost:3000/products")
            .then((responsedata)=>{
                console.log(this.state.friends)
                console.log(responsedata.data)
                this.setState({friends: responsedata.data})
                console.log("Dumping this.state.friends")
                console.log(this.state.friends)
            })
    }

    displayDetail(id){
        console.log(id)
        this.state.friends.map((f)=>{
            if(f.id === id){
                console.log(" Votes: " 
                                    + f.upvote 
                                    + " and " 
                                    + f.downvote)
            }
        })
        
    }

    displayFriends(){
        console.log("Friends will be displayed here!!!!")
        return this.state.friends.map((f)=>{
            return (<Friend
                        key={f.id}
                        myid={f.id}
                        nm={f.name}
                        dc={f.description}
                        detail={this.displayDetail}
                    ></Friend>)
        })
    }

    addProduct(){
        console.log("addProduct called!!!!  ")
        var jsonproduct = {
            "name":this.state.name,
            "upvote": this.state.upvote,
            "downvote": this.state.downvote,
            "description":this.state.description
        }
        console.log(jsonproduct)
        axios.post("http://localhost:3000/products", jsonproduct)
            .then((rd)=>{
                console.log(rd)
                this.getRemoteData()
            })

            
    }

    getName(event){
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    getDesc(event){
        console.log(event.target.value)
        this.setState({description: event.target.value})
    }

    getUp(event){
        console.log(event.target.value)
        this.setState({upvote: event.target.value})
    }

    getDown(event){
        console.log(event.target.value)
        this.setState({downvote: event.target.value})
    }

    render() { 
        return (
            <div>
                <div>
                    Name: <input type="text" onChange={this.getName}></input> <br></br>
                    Description: <input type="text" onChange={this.getDesc}></input> <br></br>
                    Upvote: <input type="number" onChange={this.getUp}></input><br></br>
                    Downvote: <input type="number" onChange={this.getDown}></input><br></br>
                    <button onClick={this.addProduct}>Add</button>
                </div>

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
