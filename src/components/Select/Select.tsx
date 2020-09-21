import React, {useState} from "react";
import classes from './Select.module.css'


type ItemType = {
    title: string
    value: string
}


export type SelectPropsValue = {
    value?: any
    onChange: any
    items: ItemType[]
};

export function Select(props: SelectPropsValue) {

    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => {
        setActive(!active)
    };

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <>
            <div className={classes.select}>

                <span className={classes.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={classes.items}>
                        {props.items.map(i => {
                            return (
                                <div
                                    className={classes.item + " " + (selectedItem === i ? classes.selected : "" )}
                                    key={i.value}
                                     onClick={() => {
                                         onItemClick(i.value)
                                     }}
                                >
                                    {i.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}