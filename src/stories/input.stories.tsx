import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const actualValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return (
        <> <input onChange={actualValueHandler}/> - {value} </>
    );
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState("")

    const inputValueRef = React.createRef<HTMLInputElement>();
    const actualValueHandler = () => {
        if (inputValueRef.current) {
            setValue(inputValueRef.current?.value);
            inputValueRef.current.value = ""
        }
    };

    return (
        <> <input ref={inputValueRef}/>
            <button onClick={actualValueHandler}> save</button>
            - {value} </>
    );
}

export const GetValueOfUncontrolledInputByButtonPressAlternative = () => {
    let [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        /*let el = inputRef.current as HTMLInputElement
        setValue(el.value)*/


        /*if (inputRef.current) {
            setValue(inputRef.current?.value);
            inputRef.current.value = ""
        }*/


        inputRef.current && setValue(inputRef.current?.value)
    };

    return (
        <> <input ref={inputRef}/>
            <button onClick={save}> save</button>
            - {value} </>
    );
}

export const ControlledInput = () => {

    let [parentValue, setParentValue] = useState("")
    debugger

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return (
        <input value={parentValue} onChange={onChange}/>
    )
};

export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return (
        <input type="checkbox" checked={parentValue} onChange={onChange}/>
    )

};

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return (
        <select value={parentValue} onChange={onChange}>
            <option value={"1"}>"Minsk"</option>
            <option value={"2"}>"Moskow"</option>
            <option value={"3"}>"Kiev"</option>


        </select>
    )

};


export const InputWithFixedValue = () => <input value={"it-incubator.by"}/>;

