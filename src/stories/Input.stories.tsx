import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from './Button';
import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
      const actualValue = event.currentTarget.value;
      setValue(actualValue);
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null) //c помощью хука создаем ссылку

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return (
      <>
        <input ref={useRef}/> <button onClick={save}>save</button> - actual value: {value}
      </> // c помощью ref привязывем ссылку inputRef к инпуту (к элементу, на который мы хотим ссылаться)
  )
}

export const ControlledInput = () => <input value={'fixed value'}/>