import React, {useState} from 'react';

type PropsType = {
    //status: boolean
}


export const UncontrolledOnOff:React.FC<PropsType> = (props) => {

    const [status, setStatus] = useState(false)

    const onStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: status ? 'green' : 'white'
    }
    const offStyle = {
        width: "30px",
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: status ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: status ? 'green' : 'red'
    }

        return (
            <div>
                <div style={onStyle} onClick={() => {setStatus(true)}}>On</div>
                <div style={offStyle} onClick={() => {setStatus(false)}}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        );


};