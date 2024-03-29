import React, {useState} from 'react';

type PropsType = {
    status: boolean
    onClick: (status: boolean) => void
}


export const OnOff:React.FC<PropsType> = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.status ? 'green' : 'white'
    }
    const offStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.status ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.status ? 'green' : 'red'
    }

        return (
            <div>
                <div style={onStyle} onClick={() => props.onClick(true)}>On</div>
                <div style={offStyle} onClick={() => props.onClick(false)}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        );


};