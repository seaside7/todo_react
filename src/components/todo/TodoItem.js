import React from 'react'
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
    const handleToogle = props.handleToogle.bind(null, props.id)
    return (
        <li key={props.id}>
            <input type="checkbox" onChange={handleToogle} checked={props.isComplete} /> {props.name}
        </li>
    )
}


TodoItem.PropTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
}