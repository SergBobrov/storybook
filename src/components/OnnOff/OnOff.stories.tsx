import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action("on or off clicked")

export const OnMode = () => <OnOff value={true} setOnOffValue={callback}/>
export const OffMode = () => <OnOff value={false} setOnOffValue={callback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff value={value} setOnOffValue={() => setValue(!value)}/>
}
