import React, { useState } from 'react'

const TodoDetails = ({ todo }) => {
    //id رو از تودو میگیریم و تویه فانشن ازش استفاده میکنیم
    const [data , setData] = useState(todo)
    const updateHandler = async (id) => {
        const res = await fetch(`http://localhost:3003/todos/${id}`);
        const data = await res.json();
        setData(data)
    }
    return (
        //ترو و فالسو بصورت عادی نمیشه نمایش داد باید تویه بک تیک باشه
       //حالا با ست کردن state ما مقادیرمون رو از اون میگیریم ک بتونیم اپ دیت کنیم
       <div>
            <h1>{data.title}</h1>
            <h1>{`${data.completed}`}</h1>
            <button onClick={()=>updateHandler(data.id)}>UpDate</button>
        </div>
    )
}

export default TodoDetails

export async function getServerSideProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:3003/todos/${params.todoId}`);
    const data = await res.json();
    return {
        props: { todo: data }
    }
}