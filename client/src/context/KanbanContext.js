import React, { useState, createContext, useEffect } from 'react';
import userAxios from './userAxios'



const KanbanContext = createContext()
const KanbanContextProvider = props => {

    const [todoArray, setTodoArray] = useState( [] )

    const getTodos = () => {
        userAxios.get( "/api/todo" )
            .then( res => {
                setTodoArray( prevState => ( [
                    ...res.data
                ] ) )
            } )
    }

    useEffect( () => {
        getTodos()
    }, [] )

    const saveTodo = ( newTodo ) => {
        userAxios.post( '/api/todo', newTodo )
            .then( res => {
                setTodoArray( prevState => ( [res.data, ...prevState] ) )
            } )
    }

    const changeTodo = ( todo ) => {
        const todoIndex = todoArray.findIndex( existingTodo => existingTodo._id === todo._id)
        const existingTodo = todoArray[todoIndex]
        userAxios.put( `/api/todo/${ todo._id }`, todo )
            .then( res => {
                const updatedTodo = Object.assign( existingTodo, res.data )
                setTodoArray( prevState => ( [
                    ...prevState.slice( 0, todoIndex ), updatedTodo, ...prevState.slice( todoIndex + 1 )
                ] )
                )
            } )
            .catch( err => alert( err.response.data.errMsg ) )
    }

    const deleteTodo = (todoId) => {
        userAxios.delete(`/api/todo/${todoId}`).then(res => {
            const todoIndex = todoArray.findIndex( existingTodo => existingTodo._id === todoId)
            setTodoArray( prevState => ( [
            ...prevState.slice( 0, todoIndex ), ...prevState.slice( todoIndex + 1 )
        ] ))
    })
}

    return (
        <KanbanContext.Provider value={{
            todoArray,
            setTodoArray,
            getTodos,
            saveTodo,
            changeTodo,
            deleteTodo,
        }}>
            {props.children}
        </KanbanContext.Provider>
    )
}

export { KanbanContext, KanbanContextProvider }