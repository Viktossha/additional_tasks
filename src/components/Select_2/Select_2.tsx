import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type PropsItems = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    items: PropsItems[]
    onClick: (value: any) => void
}

export const Select_2 = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {setHoveredElementValue(props.value)}, [props.value])
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
                    const pretendentElement =  e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
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
            <span className={styles.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(el => <div className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                                                            key={el.value}
                                                            onClick={() => onItemClick(el.value)}
                                                            onMouseEnter={() => setHoveredElementValue(el.value)}>

                        {el.title}
                    </div>)}
                </div>
            }
        </div>
    );
};