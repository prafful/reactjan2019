import React from 'react';
import Title from './title';
import Description from './description';
import Rating from './rating';

class Review extends React.Component {
    
    render() { 
        return ( 
            <div>
                Review components building blocks
                like - title, description, rating
                will come here!
                <br></br>
                <b>Title:</b> <Title mytitle={this.props.title}></Title>
                <br></br>
                <b>Description:</b> <Description mydesc={this.props.desc}></Description>
                <Rating myrating={this.props.rating}></Rating>
                <hr></hr>
            </div>
         );
    }
}
 
export default Review;