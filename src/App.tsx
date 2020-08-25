import React from 'react';
import './App.css';
import Accordion from "./components/Acrordion/Acordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./OnnOff/OnOff";

function App() {
    console.log("App rendered")

    return (
        <div className="App">
         {/*   <PageTitle title={"Tish is APP component"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />

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
