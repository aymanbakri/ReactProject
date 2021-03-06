import React, { Component } from 'react';
import Rating from '../home/Rating';
import Review from './Review';

export default class Reviews extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       var rating = 0;
       for (let i of this.props.reviews) {
           rating += i.rating;
       }
       rating = rating / this.props.reviews.length;

        return (
            <div className="Reviews" id="Reviews">
                <div className="ReviewLocation">
                    <a className="reviewsRev"> {this.props.reviews.length + " Reviews "+" "}</a>
                    <a className="reviewsRating"><Rating rating={rating}/></a>
                </div>
                <div className="ReviewsForLocation" >
                    {
                        this.props.reviews.map((review, i) =>
                            <Review key={i}
                                id={review.id}
                                caption={review.caption}
                                description={review.description}
                                rating={review.rating}
                                author={review.author}
                                authorpic={review.authorPic}
                            />)
                    }
                </div>
            </div>
        )
    }

}