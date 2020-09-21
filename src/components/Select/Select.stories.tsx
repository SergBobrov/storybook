import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
}


export const BaseExample = () => {

    const [value, setValue] = useState('2')


    return (
        <>
            <Select onChange={setValue}
                    value={value}
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
    const [value, setValue] = useState(null)

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Moskow'},
                        {value: '3', title: 'Kiev'}]
                    }
            />
        </>
    )
}
