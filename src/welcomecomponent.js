import React from 'react'
import Community from './community';
 

class Welcome extends React.Component{
   render(){
       return(
           <div>  
                        
            <h1>{this.props.msg} from {this.props.children}</h1>
            
           </div>

       )
   } 
}


export default Welcome