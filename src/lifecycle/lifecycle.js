import React from 'react';
import ReactDOM from 'react-dom'


class Lifecycle extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            lifecycle:0
        }

        this.changeLifecycle = this.changeLifecycle.bind(this)
    }


    componentWillMount(){
        console.log("Lifecycle component will mount now!")
        //alert("Component will mount now!")
    }
    
    componentDidMount(){
        console.log("LS component has mounted!!!!")
    }

    componentWillUpdate(){
        console.log("LS component will update now!!!!")
    }

    componentDidUpdate(){
        console.log("LS component has updated!!!!")
    }

    changeLifecycle(){
        this.setState({
            lifecycle: this.state.lifecycle+1
        })

        if(this.state.lifecycle >10){
            ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
        }

    }

    componentWillUnmount(){
        console.log("LS component will unmount")
        alert("LS will unmount from view")
    }

    render() { 
        return (
            <div>
                <h1>Exploring Component Life Cycle!!!!: 
                { this.state.lifecycle}</h1>
                <button onClick={this.changeLifecycle}>Change State</button>
            </div>
          );
    }
}
 
export default Lifecycle;