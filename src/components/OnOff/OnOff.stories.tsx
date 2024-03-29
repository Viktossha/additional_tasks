import {OnOff} from "./OnOff";
import {useState} from "react";

export default {
    component: OnOff
}

export const OnMode = () => {
    return <OnOff status={true} onClick={() => {}}/>
}

export const OffMode = () => {
    return <OnOff status={false} onClick={() => {}}/>
}

export const ModeChanging = () => {
    const [status, setStatus] = useState(false)
    return <OnOff status={status} onClick={setStatus}/>
}
