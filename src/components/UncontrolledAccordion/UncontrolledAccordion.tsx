import React, {useReducer, useState} from 'react';
import {action} from "@storybook/addon-actions";

type PropsType = {
    titleValue: string
    //collapsed: boolean
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === TOGGLE_CONSTANT) {
        return !state
    }

    return state
}

type ActionType = {
    type: string
}

export const UncontrolledAccordion = (props: PropsType) => {

    //const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_CONSTANT})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}