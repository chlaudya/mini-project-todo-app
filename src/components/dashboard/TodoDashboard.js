import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    CheckCircleOutlined,
    StarOutlined,
    UserOutlined,
    SmileOutlined,
    PlusOutlined
}
    from '@ant-design/icons';
import TodoTable from './TodoTable';
import { Input, Button } from 'antd';


function TodoDashboard() {
    const { Header, Content, Footer, Sider } = Layout;

    const todoData = [
        {
            id: 1,
            task: 'Writing',
            description: 'Novel',
            duedate: Date,
            importance: true,
            completion: false
        },
        {
            id: 2,
            task: 'Compossing',
            description: 'new Song',
            duedate: Date,
            importance: true,
            completion: false
        }
    ]

    const initialFormState = { id: null, task: '', duedate: Date }

    // Setting state
    const [mytodo, setMytodo] = useState(todoData)
    const [currentTodo, setCurrentTodo] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    const [task, setTask] = useState(initialFormState)


    const addTodo = todo => {
        todo.id = mytodo.length + 1
        setMytodo([...mytodo, todo])
    }

    const deleteTodo = id => {
        setEditing(false)

        setMytodo(mytodo.filter(todo => todo.id !== id))
    }
    const updateTodo = (id, updatedTodo) => {
        setEditing(false)

        setMytodo(mytodo.map(todo => (todo.id === id ? updatedTodo : todo)))
    }
    const editRow = todo => {
        setEditing(true)

        setCurrentTodo({ id: todo.id, task: todo.name, duedate: todo.duedate })
    }


    //for input function
    const handleInputChange = event => {
        const { task, value } = event.target

        setTask({ ...task, [task]: value })
    }

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Todos
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SmileOutlined />}>
                        My Day
                    </Menu.Item>
                    <Menu.Item key="3" icon={<StarOutlined />}>
                        Important
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CheckCircleOutlined />}>
                        Completed
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div className="todo-dashboard">
                            <Input placeholder="Add Task ...." type="text" id="myInput" />
                            <Button type="primary" icon={<PlusOutlined onClick={addTodo} />}>
                                Add
                            </Button>
                        </div>
                        {editing ? (

                            <TodoTable
                                editing={editing}
                                setEditing={setEditing}
                                currentTodo={currentTodo}
                                updateTodo={updateTodo}
                            />

                        ) : (

                                <TodoTable
                                    mytodo={mytodo}
                                    addUser={addTodo}
                                />

                            )}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>footer</Footer>
            </Layout>
        </Layout>
    );
}

export default TodoDashboard;