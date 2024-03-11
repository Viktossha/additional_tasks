import React, {useState} from 'react';

type PropsType = {
    onChange: (status: boolean) => void
}


export const UncontrolledOnOff: React.FC<PropsType> = (props) => {

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

    const onClicked = () => {
        setStatus(true);
        props.onChange(true)
    }

    const offClicked = () => {
        setStatus(false);
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );


};