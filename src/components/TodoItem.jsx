import React from "react";

const TodoItem = (props) => {
    return (
        <div>
            <li className="list-group-item">
                {props.todo.task}
            </li>
        </div>
    );
};

export default TodoItem;
