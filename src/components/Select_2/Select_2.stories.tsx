import React, {useState} from 'react';
import {Select_2} from "./Select_2";
import {action} from "@storybook/addon-actions";

export default {
    component: Select_2
}

export const SelectWithValue = () => {
    const [value, setValue] = useState(1)
    return <Select_2 value={value}
                     items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]}
                     onClick={setValue} />
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select_2 value={value}
                     items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]}
                     onClick={action('Value change')}/>
}