import React, {useReducer} from 'react';
import {Simulate} from "react-dom/test-utils";

type PropsType = {
    titleValue: string
    //collapsed: boolean
}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Error action type")
    }
    return state
}

type ActionType = {
    type: string
}

export const UncontrolledAccordion = (props: PropsType) => {

    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_CONSTANT})}}/>
            {!state.collapsed && <AccordionBody/>}
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