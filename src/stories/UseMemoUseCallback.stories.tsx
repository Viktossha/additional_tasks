import React, {useCallback, useMemo, useState} from "react";

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
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('users render')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(SecretUsers)

export const Example2 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Masha', 'Anna']);
    console.log('example2 render')

    let newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['react', 'css', 'html']);

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newUsers = [...books, 'js ' + new Date().getTime()]
    //         setBooks(newUsers)
    //     }
    // }, [books])

    const memoizedAddBook = useCallback(() => {
            const newUsers = [...books, 'js ' + new Date().getTime()]
            setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

const BooksSecret = (props: {addBook: () => void }) => {
    console.log('books render')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)
