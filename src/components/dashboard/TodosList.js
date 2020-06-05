import React, { Fragment } from "react";
import axios from "axios";
import HeaderDashboard from './HeaderDashboard';
import "../../assets/sass/todo.css";
import {
  EditFilled,
  StarOutlined,
  DeleteFilled,
}
  from '@ant-design/icons';
import { Checkbox, Button } from 'antd';
import TodosAdd from "./TodosAdd";
import Swal from 'sweetalert2';
const baseUrl = "https://my-todo-mini-project.herokuapp.com/MyTodoAPI/";
let token;

class TodosList extends React.Component {
  state = {
    tasks: [],
    showModal: false,
    loading: false
  }

  getAllTask = async () => {
    token = localStorage.getItem("access_token")
    try {
      const res = await axios.get(`${baseUrl}/todo/findAll?page=1`, {
        headers: {
          token
        }
      })
      this.setState({ tasks: res.data.data.todos })
    } catch (error) {
      console.log(error)

    }
  }

  deleteItem = async (id) => {
    token = localStorage.getItem("access_token")
    try {
      Swal.fire({
        icon: "question",
        text: "are you sure to delete this task?"
      })
      const res = await axios.delete(`${baseUrl}/todo/delete/${id}`, {
        headers: {
          token
        }
      })
      this.setState({ tasks: this.state.tasks.filter(item => item.id !== id) })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getAllTask()
  }

  render() {
    return (
      <Fragment>
        <TodosAdd getAllTask={this.getAllTask} />
        <div>
          <table className="todo-list">
            <thead >
              <tr>
                <th>Completion</th>
                <th>Task</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Importance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks && this.state.tasks.map(item =>
                <tr key={item.id} className="todo-list__item">
                  <td>
                    <Checkbox>
                      {item.completion}
                    </Checkbox>
                  </td>
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td>{item.due_date}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    <Button icon={<StarOutlined />}>
                      {item.importance}
                    </Button>
                  </td>
                  <td>
                    <Button icon={<DeleteFilled />} onClick={() => this.deleteItem(item.id)} />
                  </td>

                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}


export default TodosList;
