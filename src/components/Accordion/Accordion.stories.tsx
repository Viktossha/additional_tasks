import type { Meta, StoryObj } from '@storybook/react';

import {Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export const CollapsedAccordion = () => {
    return  <Accordion titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onClick={() => {}}
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