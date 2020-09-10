import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onclick: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick = {props.onclick}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion;