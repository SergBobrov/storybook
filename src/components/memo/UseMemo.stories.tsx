import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DificultCouting = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultB = 1

    let resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for a: {resultB}
            </div>
        </>
    )
};


const UsersSecret = (props: { users: string[] }) => {
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}


const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Valera", "Sveta", "Petia", "Dimych"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }

    return (
        <>
            <button onClick={() => (setCounter(counter + 1))}>+</button>
            {counter}
            <button onClick={() => (addUser())}>addUser</button>
            <Users users={newArray}></Users>
        </>
    )
};


