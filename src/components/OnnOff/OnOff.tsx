import React, {useState} from "react";

type PropsType = {
    value: boolean
    setOnOffValue: () => void
}


export function OnOff(props: PropsType) {

/*    let [on, setOn] = useState(false);
    console.log(on);*/

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "10px",
        display: "inline-block",
        padding: "2px",
        background: props.value ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        padding: "2px",
        background: props.value ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        background: props.value ? "green" : "red"


    }


    return (
        <div>
            <div style={onStyle} onClick={props.setOnOffValue
            }>On
            </div>
            <div style={offStyle} onClick={props.setOnOffValue
            }>Off
            </div>
            <div style={indicatorStyle}><span>ops</span></div>
        </div>
    )
}

