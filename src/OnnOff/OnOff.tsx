import React, {useState} from "react";

type PropsType = {}


function OnOff(props: PropsType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "10px",
        display: "inline-block",
        padding: "2px",
        background: on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        padding: "2px",
        background: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        background: on ? "green" : "red"


    }


    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}><span>x</span></div>
        </div>
    )
}

export default OnOff;