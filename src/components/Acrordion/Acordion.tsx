import React from "react";

type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onclick: () => void
    items: ItemType[]
    onClick: (value: string) => void

}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onclick}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: string) => void
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=> props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    );
}


