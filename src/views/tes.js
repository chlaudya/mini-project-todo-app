submit = async (e) => {
    this.setState({ isLoading: true })

    const loginUser = {
        email: this.state.email,
        password: this.state.password
    }
    try {
        const res = await axios.post(`https://my-todo-mini-project.herokuapp.com/MyTodoAPI/user/register`, loginUser)
        if (res.data.status === "success") {
            localStorage.setItem("token", res.data.data.token)
            this.setState({ isLoading: false, email: "", password: "" })
            this.props.history.push("/dashboard")
        }
    } catch (error) {
        console.log(error)
        this.setState({ isLoading: false, email: "", password: "" })
    }
}
