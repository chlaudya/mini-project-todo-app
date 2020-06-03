import React from 'react';
import {
    EditFilled,
    StarOutlined,
    DeleteFilled,
}
    from '@ant-design/icons';
import { Checkbox, Button } from 'antd';
import "./table.scss";

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
}
const TodoTable = props => (
    <table className="todo-table">
        <thead>
            <tr>
                <th>Completion</th>
                <th>Task</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Importance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.mytodo.length > 0 ? (
                props.mytodo.map(todo => (
                    <tr key={todo.id}>
                        <td>
                            <Checkbox onChange={onChange}>
                                {todo.completion}
                            </Checkbox>
                        </td>
                        <td>{todo.task}</td>
                        <td>{todo.description}</td>
                        <td>{todo.duedate}</td>
                        <td>
                            <Button icon={<StarOutlined />} />
                            {todo.importance}
                            <Button />
                        </td>
                        <td>
                            <Button icon={<EditFilled />} />
                            <Button icon={<DeleteFilled />} />
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={6}>No users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default TodoTable;