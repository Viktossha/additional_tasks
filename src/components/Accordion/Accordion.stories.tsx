import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion } from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
}

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true,
//         onClick: () => {}
//     }
// }

const onChangeHandler = action('onChange')
const onClickHandler = action('some item was clicked')
export const CollapsedAccordion = () => {
    return  <Accordion titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onChange={onChangeHandler}
                       items={[]}
                       onClick={onClickHandler}
            />

}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      onChange={() => {}}
                      onClick={onClickHandler}
                      items={[{title: 'HTML', value: 1}, {title: 'CSS', value: 2}, {title: 'JS', value: 3}, {title: 'REACT', value: 4}]}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}
                      onClick={(value) => {alert(`your value ${value}`)}}
                      items={[{title: 'Sasha', value: 1}, {title: 'Viktor', value: 2}, {title: 'Alina', value: 3}, {title: 'Leva', value: 4}]}
    />
}