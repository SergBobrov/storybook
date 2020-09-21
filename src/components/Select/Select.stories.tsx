import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
}


export const BaseExample = () => {
    return (
        <>
            <Select onChange={action("Value changed")}
                    value={'1'}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Moskow'},
                        {value: '3', title: 'Kiev'}]
                    }
            />
        </>
    )
}


export const WithoutValue = () => {
    return (
        <>
            <Select onChange={action("Value changed")}

                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Moskow'},
                        {value: '3', title: 'Kiev'}]
                    }
            />
        </>
    )
}
