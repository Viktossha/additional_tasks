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

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}
  return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2')
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}

  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value="1">Moscow</option>
    <option value="2">Saint-P</option>
    <option value="3">Yaroslavl</option>
  </select>
}

export const ControlledInputWithFixedValue = () => <input value={'fixed value'}/>