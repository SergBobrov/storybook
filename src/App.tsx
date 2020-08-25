import React from 'react';
import './App.css';
import Accordion from "./components/Acrordion/Acordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendered")

    return (
        <div className="App">
            <PageTitle title={"Tish is APP component"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            <Rating value={4}/>
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
