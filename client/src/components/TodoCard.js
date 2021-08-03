import React, { useContext, useState, useEffect } from "react"
import { Todo } from "./StyledComponents"
import { KanbanContext } from "../context/KanbanContext"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const TodoCard = props => {
	const {
		title,
		id,
		status,
		description,
		postedBy,
		assignedTo,
		dueBy,
		createdOn,
	} = props
	const {
		todoArray,
		changeTodo,
		deleteTodo,
	} = useContext(KanbanContext)
	const [resultsMode, setResultsMode] = useState(true)

	const dueObject = new Date(dueBy)
	const createdObject = new Date(createdOn)
	const [dueDate, setDueDate] = useState(dueObject)
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
		const { value, parentNode } = e.target
		const targetTodo = todoArray.find(
			todo => todo._id === parentNode.parentNode.id
		)
		targetTodo.status = value
		e.target.checked = true
		changeTodo(targetTodo)
	}

	const handleEditChange = e => {
		const { name, value } = e.target
		setModifiedTodo(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const saveEdit = e => {
		e.preventDefault()
		changeTodo(modifiedTodo)
	}

	useEffect(() => {
		setModifiedTodo(prevState => ({
			...prevState,
			dueBy: dueDate,
		}))
	}, [dueDate])

	return (
		<Todo>
			{resultsMode ? (
				<div>
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
						<p className="content">
							{createdObject.toDateString()}
						</p>
					</p>
					<p className="label">
						Due by:{" "}
						<p className="content">{dueObject.toDateString()}</p>
					</p>
				</div>
			) : (
				<form>
					<p className="label">
						Title:{" "}
						<input
							name="title"
							value={modifiedTodo.title}
							onChange={handleEditChange}></input>
					</p>
					<p className="label">
						Desc:{" "}
						<input
							name="description"
							value={modifiedTodo.description}
							onChange={handleEditChange}></input>
					</p>
					<p className="label">
						Created by: <p className="content">{postedBy}</p>
					</p>
					<p className="label">
						Assigned to:{" "}
						<input
							name="assignedTo"
							value={modifiedTodo.assignedTo}
							onChange={handleEditChange}></input>
					</p>
					<p className="label">
						Created on:{" "}
						<p className="content">
							{createdObject.toDateString()}
						</p>
					</p>
					<p className="label">
						Due by:{" "}
						<p className="content">
							<DatePicker
								selected={dueDate}
								onChange={date => setDueDate(date)}
							/>
						</p>
					</p>
				</form>
			)}
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
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<div>
					<button type="button" onClick={toggleResultsMode}>
						{resultsMode ? "Edit" : "Cancel"}
					</button>
					{!resultsMode && (
						<button type="button" onClick={saveEdit}>
							Save
						</button>
					)}
				</div>
				<button type="button" onClick={() => deleteTodo(id)}>
					Delete
				</button>
			</div>
		</Todo>
	)
}
export default TodoCard
