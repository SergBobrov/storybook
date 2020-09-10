import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Acrordion/Acordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnnOff/OnOff";
import UncontrolledAccordion from './components/UncontrolledAcordion/UncontrolledAcordion'
import {Rating, RatingPropsValue, RatingValueType} from './components/Rating/Rating';

function App() {
    console.log("App rendered")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let[accordionCollapsed, setaccordionCollapsed] = useState<boolean>(true )

    let [value, setOnOffValue] = useState<boolean>(false);

    return (
        <div className="App">


            {/*


            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating/>*/}

            <OnOff value={value} setOnOffValue={()=> setOnOffValue(!value)}/>

            <Rating value={ratingValue} onStarClick={setRatingValue} />

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onclick={()=> setaccordionCollapsed(!accordionCollapsed)}/>

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
