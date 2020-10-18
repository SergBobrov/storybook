import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback'
}


const BooksSecret = (props: { books: string[], addBook: () => void }) => {
    console.log('chek')
    return (
        <div>
            <button onClick={() => (props.addBook())}>addBook</button>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}</div>
    )
}


const Book = React.memo(BooksSecret)


export const LikeUseCallBack = () => {

    console.log('LikeUseCallback');

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "HTML", "CSS", "JS"])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])


    const addBook = () => {
        console.log('addBook')
        setBooks([...books, 'Angular'])
    }

    const MemoziedAddBook2 = useMemo(() => {
        return addBook
    }, [books])

    const MemoziedAddBook = useCallback(() => {
        setBooks([...books, 'Angular'])

    }, [books])


    return (
        <>
            <button onClick={() => (setCounter(counter + 1))}>+</button>
            {counter}

            <Book addBook={MemoziedAddBook} books={newArray}></Book>
        </>
    )
};

