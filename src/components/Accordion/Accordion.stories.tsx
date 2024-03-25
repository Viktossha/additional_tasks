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

const onClickHandler = action('onClick')
export const CollapsedAccordion = () => {
    return  <Accordion titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onClick={onClickHandler}
            />

}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      onClick={() => {}}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onClick={() => {setCollapsed(!collapsed)}}
    />
}