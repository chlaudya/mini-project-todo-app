import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardPokemon from '../components/card'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useLayoutEffect } from 'react'
import { getTodo } from '../stores/index'
import { useHistory } from 'react-router-dom'

// lanjut aja
export default () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    // ini dispatchnya mana ?
    // coba pake useDispatch, kayak yang kang Ajat contohin ya
    dispatch(getTodo())
  }, [dispatch])

  const todo = useSelector(state => state.todosList)
  const history = useHistory()
  const Add = () => {
    history.push('/add')
  }
  return (
    <>
      <Button variant="primary" type="submit" onClick={Add}>Add</Button>
      <Container>
        <Row md="auto">
          {
            pokemon.map((item, idx) => <Col><CardPokemon key={idx} name={item.name} /></Col>)
          }
        </Row>
      </Container>
    </>
  )
}


import React, { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodo } from '../stores/index';
import Pagination from '@material-ui/core/Pagination';
import axios from 'axios';
import {
  EditFilled,
  StarOutlined,
  DeleteFilled,
}
  from '@ant-design/icons';
import { Checkbox, Button } from 'antd';
import "../../assets/sass/table.scss";

const TodosList = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    // ini dispatchnya mana ?
    // coba pake useDispatch, kayak yang kang Ajat contohin ya
    dispatch(getTodo())
  }, [dispatch])

  const todo = useSelector(state => state.todosList)

  const [completion, setCompletion] = useState('')

  const updateCompletionTrue = (e) => {
    e.preventDefault()
    setCompletion(e.target.value)
    axios({
      method: "PUT",
      url: `https://my-todo-mini-project.herokuapp.com/MyTodoAPI/todo/update/${todo.id}`,
      headers: {
        token:
          localStorage.getItem("access_token")
      },
      data: {
        completion
      },
    })
  }

  getAll = async (e) => {
    this.setState({ isLoading: true })
    e.preventDefault()

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      const res = await axios.post(`https://my-todo-mini-project.herokuapp.com/MyTodoAPI/user/login`, loginUser)
      if (res.data.status === "success") {
        localStorage.setItem("access_token", res.data.data.access_token)
        this.setState({ isLoading: false, email: "", password: "" })
        this.props.history.push("/dashboard")
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, email: "", password: "" })
    }
  }


  return (
    <>
      <table className="todo-list">
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
          {todo.length > 0 ? (
            todo.map(todo => (
              <tr key={todo.id}>
                <td>
                  <Checkbox onChange={updateCompletionTrue}>
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
                <td colSpan={6}>No Task</td>
              </tr>
            )}
        </tbody>
      </table>
//       <Pagination count={10} showFirstButton showLastButton />

//     </>
//   )

// }

// export default TodosList;
