import React, { Fragment } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import "../../assets/sass/todo.css";
import "../../assets/sass/input.css";
import { PlusSquareTwoTone } from '@ant-design/icons';
const baseUrl = "https://my-todo-mini-project.herokuapp.com/MyTodoAPI/";

class TodosAdd extends React.Component {
    state = {
        task: "",
        description: "",
        due_date: "",
        importance: false,
        completion: false,
        isLoading: false
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = async (e) => {
        this.setState({ isLoading: true })
        let token = localStorage.getItem("access_token")
        e.preventDefault()
        // create data 
        const newTodo = {
            task: this.state.task,
            description: this.state.description,
            due_date: this.state.due_date
        }

        try {
            const res = await axios.post(`${baseUrl}/todo/create`, newTodo, {
                headers: {
                    token
                }
            })
            this.props.getAllTask()
            this.setState({ task: "", description: "", due_date: "", isLoading: false })
            Swal.fire({
                icon: 'success',
                title: 'Your task have been created successfully ',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'warning',
                title: 'Ooppss..The field must be fill!',
            })
            console.log(error)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="card-todo">
                    <h1>Let's Create Your Todo List..!</h1>
                    <form onSubmit={this.submit} >
                        <div class="form__group" >
                            <input
                                name="task"
                                value={this.state.task}
                                placeholder="add task"
                                onChange={this.change}
                                type="text"
                                class="form__input"
                                id="name"
                                required=""
                            />
                            <label
                                for="name"
                                class="form__label"
                            >
                                Task
                            </label>
                        </div>
                        <div class="form__group" >
                            <input
                                name="description"
                                value={this.state.description}
                                placeholder="description"
                                onChange={this.change}
                                type="text"
                                class="form__input"
                                id="name"
                                required=""
                            />
                            <label
                                for="name"
                                class="form__label"
                            >
                                Description
                            </label>
                        </div>
                        <div class="form__group" >
                            <input
                                name="due_date"
                                value={this.state.due_date}
                                placeholder="year-month-day"
                                onChange={this.change}
                                type="text"
                                class="form__input"
                                id="name"
                                required=""
                            />
                            <label
                                for="name"
                                class="form__label"
                            >
                                Due Date
                            </label>
                            <button icon={<PlusSquareTwoTone />} className="btn-add">{this.state.isLoading ? "loading..." : "add"}</button>
                        </div>
                    </form>
                    {/* <form onSubmit={this.submit} >
                        <input type="text" name="task"
                                value={this.state.task}
                                placeholder="add task"
                                onChange={this.change}/>
                        <input type="text" name="description" value={this.state.description} placeholder="description" onChange={this.change} />
                        <input type="text" name="due_date" value={this.state.due_date} placeholder="year-month-day" onChange={this.change} />
                        
                    </form> */}
                </div>
            </Fragment>
        )
    }
}

export default TodosAdd;

