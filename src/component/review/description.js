import React from 'react';

class Description extends React.Component {
    
    render() { 
        return ( 
            <span>
                {this.props.mydesc}
            </span>
         );
    }
}
 
export default Description;