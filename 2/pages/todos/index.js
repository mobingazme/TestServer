import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useSWR from "swr"

//key= ادرس یا url 
const url = "http://localhost:3003/todos";
//فانشن مخصوص useSWR ک برایه تمیزی کد اینجا اجراش میکنیم
const fetcher = (url) => fetch(url).then((res) => res.json());
const Todos = () => {
    // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:3003/todos")
    //       .then((res) => res.json())
    //      .then((data) => setTodos(data))
    // }, [])

    const { data, error } = useSWR(url, fetcher);
    return (
        <div>
            {data ? (
                data.map((todo) => <Link href={`/todos/${todo.id}`} key={todo.id}>
                    <h3>{todo.title}</h3>
                </Link>)
            ) : (
                <h3>Loading ...</h3>
            )}
        </div>
    )
}



export default Todos