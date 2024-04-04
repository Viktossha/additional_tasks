import React from 'react';

type PropsItems = {
    title: string
    value: any
}

type PropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: PropsItems[]
    onClick: (value: any) => void
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onChange={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: PropsItems[]
    onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, index) => <li key={index} onClick={() => {props.onClick(el.value)}}>{el.title}</li>)}
        </ul>
    )
}