import React from 'react'
import {TodoItem} from './TodoItem'
import PropTypes from 'prop-types';


export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo => <TodoItem handleToogle={props.handleToogle} key={todo.id} {...todo}/>)} 
            </ul>
        </div>
    )

}

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired
}