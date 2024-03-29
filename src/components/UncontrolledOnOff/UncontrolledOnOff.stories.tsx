import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    component: UncontrolledOnOff
}

const onClickHandler = action('on or off clicked')

export const OnMode = () => {
    return <UncontrolledOnOff defaultStatus={true} onChange={onClickHandler}/>
}

export const OffMode = () => {
    return <UncontrolledOnOff defaultStatus={false} onChange={onClickHandler}/>
}
