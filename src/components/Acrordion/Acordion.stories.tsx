import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Acordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("on or off clicked")

export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onclick={callback}/>
export const UnCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onclick={callback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return<Accordion titleValue={"Menu"} collapsed={value} onclick={()=>setValue(!value)}/>
}
