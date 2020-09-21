import React, {useState} from "react";
import classes from './Select.module.css'


type ItemType = {
    title: string
    value: string
}


export type SelectPropsValue = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
};

export function Select(props: SelectPropsValue) {

    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(i => i.value === props.value);
    const showItems = () => {
        setActive(!active)
    };
    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
            <div className={classes.select}>

                <div onClick={showItems}>{selectedItem && selectedItem.title}</div>
                {
                    active &&
                    <div className={classes.items}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}