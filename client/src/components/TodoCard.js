import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { KanbanContext } from "../context/KanbanContext"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Todo = styled.div`
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	width: auto;
	min-width: 300px;
	border: 1px solid #121212;
	border-radius: 8px;

	.content {
		margin: 4px 0;
	}

	section {
		display: flex;
		flex-direction: row;
		width: 30%;
		justify-content: space-between;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	input[type="checkbox"] {
		position: relative;
		top: -16px;
		opacity: 0;
	}

	i :hover {
		cursor: pointer;
	}

	.label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		min-width: 100%;
		font-weight: bold;
	}
`

const TodoCard = props => {
	const {
		key,
		title,
		id,
		status,
		description,
		postedBy,
		assignedTo,
		dueBy,
		createdOn,
		todo,
	} = props
	const { todoArray, setTodoArray, getTodos, saveTodo, changeTodo, deleteTodo } =
		useContext(KanbanContext)
	const [changed, setChanged] = useState(false)
	const [resultsMode, setResultsMode] = useState(true)
    
    const dueObject = new Date(dueBy)
    const createdObject = new Date(createdOn)
    const [dueDate, setDueDate] = useState( dueObject )
    const toggleResultsMode = () => setResultsMode(!resultsMode)
    
	const [modifiedTodo, setModifiedTodo] = useState({
        title: title,
		description: description,
		postedBy: postedBy,
		assignedTo: assignedTo,
		createdOn: createdOn,
		dueBy: dueDate,
		status: status,
		_id: id,
	})
    
	
    const handleChange = e => {
        const { name, value, parentNode } = e.target
		const targetTodo = todoArray.find(
            todo => todo._id === parentNode.parentNode.id
            )
            targetTodo.status = value
            e.target.checked = true
            changeTodo(targetTodo)
        }
        
        const handleEditChange = e => {
            const {name, value} = e.target
            setModifiedTodo(prevState => ({
                ...prevState,
                [name]: value
            }))
        }

        const saveEdit = e => {
            e.preventDefault()
            changeTodo(modifiedTodo)
        }
        
        useEffect(() => {
                setModifiedTodo(prevState => ({
                    ...prevState,
                    dueBy: dueDate
                }))
            
                }, [dueDate])
            
            // const readibleDueDate = dueBy.toDateString()
            // const readibleCreatedOn = createdOn.toDateString()
	return (
		<Todo>
{resultsMode ? (			<div>
				<p className="label">
					Title: <p className="content">{title}</p>
				</p>
				<p className="label">
					Desc: <p className="content">{description}</p>
				</p>
				<p className="label">
					Created by: <p className="content">{postedBy}</p>
				</p>
				<p className="label">
					Assigned to: <p className="content">{assignedTo}</p>
				</p>
				<p className="label">
					Created on:{" "}
					<p className="content">{createdObject.toDateString()}</p>
				</p>
				<p className="label">
					Due by:{" "}
					<p className="content">{dueObject.toDateString()}</p>
				</p>
			</div>) :
(			<form>
				<p className="label">
					Title: <input name="title" value={modifiedTodo.title} onChange={handleEditChange}></input>
				</p>
				<p className="label">
					Desc: <input name="description" value={modifiedTodo.description} onChange={handleEditChange}></input>
				</p>
				<p className="label">
					Created by: <p className="content">{postedBy}</p>
				</p>
				<p className="label">
					Assigned to: <input name="assignedTo" value={modifiedTodo.assignedTo} onChange={handleEditChange}></input>
				</p>
				<p className="label">
					Created on:{" "}
					<p className="content">{createdObject.toDateString()}</p>
				</p>
				<p className="label">
					Due by:{" "}
					<p className="content"><DatePicker selected={dueDate} onChange={( date ) => setDueDate( date )} /></p>
				</p>
			</form>)}
			<section id={id}>
				<label htmlFor="todo">
					<i
						onClick={() => console.log("hello")}
						className={
							status === "todo"
								? "fad fa-check-circle"
								: status === "inProgress"
								? "fad fa-check-circle"
								: status === "toReview"
								? "fad fa-check-circle"
								: "fad fa-check-circle"
						}
					/>
					<input
						type="checkbox"
						name="todo"
						value="todo"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="inProgress">
					<i
						className={
							status === "todo"
								? "fad fa-circle"
								: status === "inProgress"
								? "fad fa-check-circle"
								: status === "toReview"
								? "fad fa-check-circle"
								: "fad fa-check-circle"
						}></i>
					<input
						type="checkbox"
						name="inProgress"
						value="inProgress"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="toReview">
					<i
						className={
							status === "todo"
								? "fad fa-circle"
								: status === "inProgress"
								? "fad fa-circle"
								: status === "toReview"
								? "fad fa-check-circle"
								: "fad fa-check-circle"
						}></i>
					<input
						type="checkbox"
						name="toReview"
						value="toReview"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="done">
					<i
						className={
							status === "todo"
								? "fad fa-circle"
								: status === "inProgress"
								? "fad fa-circle"
								: status === "toReview"
								? "fad fa-circle"
								: "fad fa-check-circle"
						}></i>
					<input
						type="checkbox"
						name="done"
						value="done"
						onChange={handleChange}
					/>
				</label>
			</section>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
			<button type="button" onClick={toggleResultsMode}>{resultsMode ? "Edit" : "Cancel"}</button>
            {!resultsMode && <button type="button" onClick={saveEdit}>Save</button>}</div>
			<button type="button" onClick={() => deleteTodo(id)}>Delete</button>
            </div>
		</Todo>
	)
}
export default TodoCard
