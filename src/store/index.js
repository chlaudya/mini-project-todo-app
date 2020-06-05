import {
    createStore, applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

export const getTodo = () => {
    return async dispatch => {
        const res = await fetch('https://my-todo-mini-project.herokuapp.com/MyTodoAPI/todo/findAll?page=1')
        const todos = await res.json()
        dispatch({
            type: 'GET_TODOS',
            payload: {
                todosArr: todos.results
            }
        })
    }
}

const defaultState = {
    todosList: []
}
const reducer = (state = defaultState, action) => {
    let favPokemon
    let pokemon
    switch (action.type) {
        case 'ADD_FAV':
            favPokemon = state.favPokemon.concat(action.payload)
            return { ...state, favPokemon }
        case 'DEL_FAV':
            favPokemon = state.favPokemon.filter(pokemon => pokemon.name !== action.payload.name)
            return { ...state, favPokemon }
        case 'GET_TODOS':
            return {
                ...state,
                todosList: [...state.todosList, ...action.payload.todosArr]
            }
        case 'ADD_VAL':
            pokemon = state.pokemon.concat(action.payload)
            return { ...state, pokemon }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))


export default store