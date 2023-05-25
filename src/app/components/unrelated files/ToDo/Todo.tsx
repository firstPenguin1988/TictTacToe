import { useState, useEffect } from "react";
import usePrevious from "./usePrevious";

const Todo = () => {
    const [todo, useTodo] = useState({ name: 'Take out laundry', points: 40});
    const prevTodo = usePrevious(todo);

    useEffect(() => {
        if(prevTodo !== todo) {
            console.log('U have some tasks to do');   
        }
    }, [todo]);

    const handleClick = () => {
        const newPoints = Math.random() > 0.5 ? todo.points : todo.points + 1;
        useTodo(prevTodo => ({...prevTodo, points: newPoints}));
    }

    return (
        <>
            <p>Current Points: {todo.points}</p>
            <button onClick={handleClick}>Increase Stakes</button>
        </>
    )
}

export default Todo;