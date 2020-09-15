import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAcordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action("on or off clicked")


export const ModeChanging = () => {

    return <UncontrolledAccordion titleValue={"Menu"}/>
}
