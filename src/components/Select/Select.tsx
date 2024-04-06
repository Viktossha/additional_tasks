import React from 'react';

type PropsItems = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: PropsItems[]
    collapsed: boolean
    onClick: (value: any) => void
    onClickTitle: () => void
}

export const Select = (props: SelectPropsType) => {
    const selectItem = props.items.find(el => el.value === props.value)
    return (
        <div className={'select'}>
            <div className={'selected-item'} onClick={props.onClickTitle}>{selectItem?.title}</div>
            {!props.collapsed && <SelectBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
};

type SelectBodyPropsType = {
    items: PropsItems[]
    onClick: (value: any) => void
}

const SelectBody = (props: SelectBodyPropsType) => {
    return <div className={'select-block'}>{props.items.map((el, index) => <div className={'select-item'} key={index} onClick={() => props.onClick(el.value)}>{el.title}</div>)}</div>
}