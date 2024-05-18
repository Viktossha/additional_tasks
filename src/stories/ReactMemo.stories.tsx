import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('messagescounter render')
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('users render')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Masha', 'Anna']);
    console.log('example1 render')

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

