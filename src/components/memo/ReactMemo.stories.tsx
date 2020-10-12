import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessangesCounter = (props: any) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}


const Users = React.memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Valera", "Sveta", "Petia"])


    return (
        <>
            <button onClick={()=>(setCounter(counter+1))}>+</button>
            <NewMessangesCounter count={counter}/>
            <Users users={users}></Users>
        </>
    )
};