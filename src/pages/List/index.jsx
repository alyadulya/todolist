import { useState } from "react";
import Form from "../Form";
import "./index.css";
import { BiEditAlt } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';

const List = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState ({ 
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index} >

            <div key={todo.id}>
                {todo.text}
            </div>

            <div className="icons">
                <input
                    type='checkbox'
                    title='Complete'
                    id='checkbox'
                    checked={todo.isComplete}
                    className='complete-icon'
                    onClick={() => completeTodo(todo.id)}
                />
                <BiEditAlt
                    className='edit-icon'
                    title='Edit'
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                />
                <RiCloseCircleLine
                    className='delete-icon'
                    title='Close'
                    onClick={() => removeTodo(todo.id)}
                />
            </div>
        </div>
    ))
}

export default List;