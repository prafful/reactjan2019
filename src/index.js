import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from "./welcomecomponent";
import Review from './component/review/reviewComponent'
import Alphabet from './component/alphabet';
import Lifecycle from './lifecycle/lifecycle';
import RestAPI from './remoteData/remotedata';

var location = document.getElementById('home')

var loc2 = document.getElementById('day2')

ReactDOM.render(
            <div>
                <Welcome msg="Vannakam">Chennai</Welcome>
                <Welcome msg="Namaskar"> Bengaluru</Welcome>    
                <Welcome msg="Arigato">Japan</Welcome> 
                <Welcome msg="Tashi">Tibet</Welcome>  
                <br></br>
                <Alphabet fcolor="red" bcolor="brown" >P</Alphabet>
                <Alphabet fcolor="green" bcolor="red">R</Alphabet>
                <Alphabet fcolor="pink" bcolor="green">A</Alphabet>
                <Alphabet fcolor="brown" bcolor="pink">F</Alphabet>
                <Alphabet fcolor="red" bcolor="brown">F</Alphabet>
                <Alphabet fcolor="pink" bcolor="red">U</Alphabet>
                <Alphabet fcolor="brown" bcolor="pink">L</Alphabet>
            </div>   
    , location )


ReactDOM.render(
    <div>
    <div>
        <Review title="Samsung Note 9" desc="Creativity comes with the cost!!!!" rating="10" ></Review>
        <Review title="Nokia 3010" desc="old is gold!!!!" rating="9" ></Review>
        <Review title="No Mobile" desc="Digital englightment!!!!" rating="100" ></Review>
        <Review title="Stone" desc="Everyone is looking for!!!!" rating="10" ></Review>
    </div>
   
    </div>
            , loc2)    

ReactDOM.render(<Lifecycle></Lifecycle>, document.getElementById('lifecycle'))  

ReactDOM.render(<RestAPI></RestAPI>, document.getElementById('remotedata'))