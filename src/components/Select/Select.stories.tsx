import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    component: Select
}

export const CollapsedSelect = () => {
    return <Select value={1} items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]} collapsed={true} onClick={() => {}} onClickTitle={() => {}}/>
}

export const OpenSelect = () => {
    return <Select value={1} items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]} collapsed={false} onClick={() => {}} onClickTitle={() => {}}/>
}

export const SelectDemo = () => {
    let [selectValue, setSelectValue] = useState(1)
    let [selectCollapsed, setSelectCollapsed] = useState(true)

    const onChangeSelectHandler = (value: any) => {
        setSelectValue(value);
        setSelectCollapsed(!selectCollapsed)
    }

    return <Select collapsed={selectCollapsed} items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]} value={selectValue} onClick={onChangeSelectHandler} onClickTitle={() => setSelectCollapsed(!selectCollapsed)}/>
}