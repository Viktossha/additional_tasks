import React, {KeyboardEvent, useEffect, useMemo, useState} from "react";
import styles from "../components/Select_2/Select.module.css";

export default {
    title: 'select useMemo'
}

type PropsItems = {
    counterId: number
    city: string
    population: number
    value: any
}

type SelectPropsType = {
    value?: any
    items: PropsItems[]
    onClick: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    console.log('render select')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onClick(value);
        toggleItems()
    }

    const selectItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onClick(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectItem) {
                props.onClick(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectItem && selectItem.city}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(el => <div
                        className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                        key={el.value}
                        onClick={() => onItemClick(el.value)}
                        onMouseEnter={() => setHoveredElementValue(el.value)}>

                        {el.city}
                    </div>)}
                </div>
            }
        </div>
    );
};

const Select_2 = React.memo(Select)

export const Example = () => {
    console.log('render example')
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0)
    const [items, setItems] = useState([
        {counterId: 1, city: 'Moscow', population: 13000000, value: 1},
        {counterId: 1, city: 'Yaroslavl', population: 600000, value: 2},
        {counterId: 2, city: 'Minsk', population: 2000000, value: 3},
        {counterId: 2, city: 'Vitebsk', population: 360000, value: 4},
        {counterId: 3, city: 'Kiev', population: 3000000, value: 5},
        {counterId: 3, city: 'Odessa', population: 1000000, value: 6},
    ])

    let filteredItems = useMemo(() => items.filter(item => item.counterId === 2), [items])
    let filteredItems2 = useMemo(() => items.filter(item => !item.city.indexOf('M')), [items])
    let filteredItems3 = useMemo(() => items.filter(item => item.population > 10000000), [items])

    return (
        <div style={{display: "flex", gap: '30px'}}>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+ {counter}
            </button>
            <Select_2 value={value} items={filteredItems} onClick={setValue}/>
            <Select_2 value={value} items={filteredItems2} onClick={setValue}/>
            <Select_2 value={value} items={filteredItems3} onClick={setValue}/>
        </div>
    )
}