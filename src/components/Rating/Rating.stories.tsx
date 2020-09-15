import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
    }


export const EmptyRating = () => <Rating value={0} onStarClick={x => x}/>;
export const Rating1 = () => <Rating value={1} onStarClick={x => x}/>;
export const Rating2 = () => <Rating value={2} onStarClick={x => x}/>;
export const Rating3 = () => <Rating value={3} onStarClick={x => x}/>;
export const Rating4 = () => <Rating value={4} onStarClick={x => x}/>;
export const Rating5 = () => <Rating value={5} onStarClick={x => x}/>;

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onStarClick={setRating}/>
};