import React from 'react';
import './App.css';
import Accordion from "./components/Acrordion/Acordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnnOff/OnOff";
import UncontrolledAccordion from './components/UncontrolledAcordion/UncontrolledAcordion'

function App() {
    console.log("App rendered")

    return (
        <div className="App">
        {/*    <PageTitle title={"Tish is APP component"}/>
            <UncontrolledRating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UncontrolledRating value={4}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledRating/>


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
