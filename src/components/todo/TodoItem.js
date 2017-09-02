import React from 'react'
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
    return (
        <li key={props.id}>
            <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
        </li>
    )
}


TodoItem.PropTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
}