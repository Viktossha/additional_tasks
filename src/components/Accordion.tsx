import React from 'react';

type PropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => props.onClick(props.collapsed)}>{props.title}</h3>
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