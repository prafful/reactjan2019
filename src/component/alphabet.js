import React from 'react';

class Alphabet extends React.Component {

    
    
    render() { 

        let alphabetStyle = {
            color:this.props.fcolor,
            backgroundColor:this.props.bcolor

        }


        return ( 
            <span style={alphabetStyle}>{this.props.children} </span>
            
         );
    }
}
 
export default Alphabet;