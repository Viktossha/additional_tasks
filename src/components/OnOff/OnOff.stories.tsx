import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    component: OnOff
}

const onClickHandler = action('on or off clicked')

export const OnMode = () => {
    return <OnOff status={true} onClick={onClickHandler}/>
}

export const OffMode = () => {
    return <OnOff status={false} onClick={onClickHandler}/>
}

export const ModeChanging = () => {
    const [status, setStatus] = useState(false)
    return <OnOff status={status} onClick={setStatus}/>
}
