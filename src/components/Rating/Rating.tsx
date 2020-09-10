import React, {useState} from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4| 5;


export type RatingPropsValue = {
    value: RatingValueType
    onStarClick: (t: RatingValueType) => void
};

export function Rating(props: RatingPropsValue) {




    return (
        <div>
            <Star selected={props.value > 0} onStarClick={props.onStarClick} value={1}/>
            <Star selected={props.value > 1} onStarClick={props.onStarClick} value={2}/>
            <Star selected={props.value > 2} onStarClick={props.onStarClick} value={3}/>
            <Star selected={props.value > 3} onStarClick={props.onStarClick} value={4}/>
            <Star selected={props.value > 4} onStarClick={props.onStarClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onStarClick: (t: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {

    return (
        <span onClick={()=> props.onStarClick(props.value)}> {props.selected ?
            <b>Star </b> : "Star"}</span>
    )

}