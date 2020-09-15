import React, {ChangeEvent, useRef, useState} from 'react';


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
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };

    return (
        <> <input ref={"inputRef"} id={"inputId"}/>
            <button onClick={save}> save</button>
            - {value} </>
    );
}


export const InputWithFixedValue = () => <input value={"it-incubator.by"}/>;

