import React from 'react';

class Friend extends React.Component {
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.nm}</td>
                <td>{this.props.em}</td>
            </tr>
         );
    }
}

export default Friend;
