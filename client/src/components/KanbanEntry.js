import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../context/UserContext"
import { KanbanContext } from "../context/KanbanContext";

const Task = styled.form`
		min-height: fit-content;
        margin: 4px 18px 16px 18px;
        padding: 4px;
		width: auto;
        min-width: fit-content;
		border: 1px solid #121212;
        border-radius: 8px;

        p {
            margin: 4px auto;
        }

		section {
			display: flex;
			flex-direction: row;
            width: 100%;
            justify-content: space-between;
		}

        label {
            display: flex;
			flex-direction: column;
        }

        textarea {
            width: 100%;
        }
	`


function KanbanEntry(props) {
    const toggleAddTask = props.func
    const {
        username,
    } = useContext( UserContext )
    const {
        todoArray,
        setTodoArray,
        getTodos,
        saveTodo,
    } = useContext( KanbanContext )

    const [dueDate, setDueDate] = useState( new Date() )
    const [newTodo, setNewTodo] = useState( {
        title: "",
        description: "",
        postedBy: username, // username
        assignedTo: "",
        dueBy: 'dueDate'
    } )


    const handleChange = e => {
        const { name, value } = e.target
        setNewTodo( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    const handleSubmit = e => {
        e.preventDefault()
        saveTodo( newTodo )
        toggleAddTask()
        
    }

    useEffect( () => {
        setNewTodo( prevState => ( {
            ...prevState,
            dueBy: dueDate
        } ) )
    }, [dueDate] )

    return (
        <Task onSubmit={handleSubmit}>
            <section>
                <label>
                    Issue Title: <input onChange={handleChange} name="title" value={newTodo.title} type="text" />
                </label>
                <label>Due by: <DatePicker selected={dueDate} onChange={( date ) => setDueDate( date )} /></label>
            </section>
            <label>Issue Details: <textarea onChange={handleChange} name="description" value={newTodo.description} /></label>
            <section>
                <label>Posted by: <input onChange={handleChange} name="postedBy" value={newTodo.postedBy} type="text" /></label>
                <label>Assigned to: <input onChange={handleChange} name="assignedTo" value={newTodo.assignedTo} type="text" /></label>
            </section>
            <button>Save Task</button>
        </Task>
    )
}

export default KanbanEntry
