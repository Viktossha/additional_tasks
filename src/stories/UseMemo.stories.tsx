import {useMemo, useState} from "react";

export default {
    title: 'useMemo demo'
}

export const Example = () => {

    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    //let resultA = 1;
    let resultB = 1;

    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => {setA(+e.currentTarget.value)}}/>
        <input value={b} onChange={(e) => {setB(+e.currentTarget.value)}}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}