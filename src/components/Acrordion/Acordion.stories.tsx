import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Acordion";

export default {
    title: 'Accordion',
    component: Accordion
}

let items = [
    {title: "Artem", value: "1"},
    {title: "Dimych", value: "2"},
    {title: "Valera", value: "3"},
    {title: "Ivan", value: "4"},
]
 
const callback = action("on or off clicked")

export const CollapsedMode = () => <Accordion  onClick={(value)=>{ alert(value)}} titleValue={"Menu"} collapsed={true} onclick={callback} items={[]}/>
export const UnCollapsedMode = () => <Accordion onClick={(value)=>{ alert(value)}} titleValue={"Menu"} collapsed={false} onclick={callback} items={items}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return<Accordion onClick={(value)=>{ alert(value)}} titleValue={"Menu"} collapsed={value} onclick={()=>setValue(!value) } items={items}/>
}
