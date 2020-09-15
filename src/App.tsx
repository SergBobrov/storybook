import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Acrordion/Acordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

import UncontrolledAccordion from './components/UncontrolledAcordion/UncontrolledAcordion'
import {Rating, RatingPropsValue, RatingValueType} from './components/Rating/Rating';
import { OnOff } from './components/OnnOff/OnOff';
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendered")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let[accordionCollapsed, setaccordionCollapsed] = useState<boolean>(true )

    let [value, setOnOffValue] = useState<boolean>(false);

    return (
        <div className="App">

            <UncontrolledAccordion titleValue={"Menu"}/>

            <UncontrolledRating/>

            <UncontrolledOnOff/>


            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onclick={()=> setaccordionCollapsed(!accordionCollapsed)}/>

            <Rating value={ratingValue} onStarClick={setRatingValue} />

            <OnOff value={value} setOnOffValue={()=> setOnOffValue(!value)}/>

        </div>


    );
}


function hello() {
    debugger
    alert("hello");
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <>{props.title} </>
}

export default App;
