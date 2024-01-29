import React, {useState, MouseEvent} from 'react';

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {

    const [value, setValue] = useState(0)

    const onClickHandler = () => {
        setValue(n)
    }

    return (
        <div>
            <Star selected={value > 0} onClickHandler={onClickHandler}/>
            <Star selected={value > 1}/><button onClick={() => {setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={() => {setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={() => {setValue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={() => {setValue(5)}}>5</button>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    onClickHandler: (n: number) => void
}

const Star = (props: StarPropsType) => {

    if (props.selected) {
        return (
            <span onClick={props.onClickHandler}><b>star</b></span>
        )
    } else {
        return <span>star</span>
    }
}