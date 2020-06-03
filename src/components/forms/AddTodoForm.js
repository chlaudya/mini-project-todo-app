import React, { useState } from 'react';

const AddTodoForm = props => {
    const initialFormState = {
        id: null,
        task: '',
        username: ''
    }
    const [user, setUser] = useState(initialFormState)


    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>Username</label>
            <input type="text" name="username" value="" />
            <button>Add new user</button>
        </form>
    )
}

export default AddTodoForm; 