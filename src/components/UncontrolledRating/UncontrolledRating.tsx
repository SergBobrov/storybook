import React, {useState} from "react";


type RatingPropsValue = {};

type ValueType = {
    value: number
    selected: boolean
}

export function UncontrolledRating(props: RatingPropsValue) {


    let [value, setValue] = useState(0);

    let [stars, setStars] = useState<Array<ValueType>>([
        {value: 1, selected: false},
        {value: 2, selected: false},
        {value: 3, selected: false},
        {value: 4, selected: false},
        {value: 5, selected: false}
    ])

    function activateStar(value: number) {
        let newStars = stars.map((t) => {
                if (value === t.value) {
                    t.selected = !t.selected
                }
                return t
            }
        )
        setStars([...newStars])
        console.log(stars);


    }

    return (
        <div>
            {stars.map((t) => {
                return (
                    <Star stars={t} activateStar={activateStar}/>
                )
            })}
        </div>
    )
    /* return (
         <div>
             <Star selected={value>0}/> <button onClick={()=> setValue(1)}>1</button>
             <Star selected={value>1}/> <button onClick={()=> setValue(2)}>2</button>
             <Star selected={value>2}/> <button onClick={()=> setValue(3)}>3</button>
             <Star selected={value>3}/> <button onClick={()=> setValue(4)}>4</button>
             <Star selected={value>4}/> <button onClick={()=> setValue(5)}>5</button>
         </div>
     )*/
}


type StarPropsType = {
    stars: ValueType
    activateStar: (t: number) => void
}

function Star(props: StarPropsType) {

    return (
        <span onClick={() => props.activateStar(props.stars.value)}> {props.stars.selected ?
            <b>Star </b> : "Star"}</span>
    )

}