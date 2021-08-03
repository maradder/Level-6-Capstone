import React, { useState, useContext, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { UserContext } from "../context/UserContext"
import { KanbanContext } from "../context/KanbanContext"
import { Task } from "./StyledComponents"

function KanbanEntry(props) {
	const toggleAddTask = props.func
	const { username } = useContext(UserContext)
	const { saveTodo } = useContext(KanbanContext)

	const initTodo = {
		title: "",
		description: "",
		postedBy: username, // username
		assignedTo: "",
		dueBy: "dueDate",
	}
	const [dueDate, setDueDate] = useState(new Date())
	const [newTodo, setNewTodo] = useState(initTodo)

	const handleChange = e => {
		const { name, value } = e.target
		setNewTodo(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		saveTodo(newTodo)
		toggleAddTask()
	}

	const handleCancel = e => {
		e.preventDefault()
		setNewTodo(initTodo)
		toggleAddTask()
	}

	useEffect(() => {
		setNewTodo(prevState => ({
			...prevState,
			dueBy: dueDate,
		}))
	}, [dueDate])

	return (
		<Task onSubmit={handleSubmit}>
			<section>
				<label>
					Issue Title:{" "}
					<input
						required="true"
						onChange={handleChange}
						name="title"
						value={newTodo.title}
						type="text"
					/>
				</label>
				<label>
					Due by:{" "}
					<DatePicker
						selected={dueDate}
						onChange={date => setDueDate(date)}
					/>
				</label>
			</section>
			<label>
				Issue Details:{" "}
				<textarea
					required="true"
					onChange={handleChange}
					name="description"
					value={newTodo.description}
				/>
			</label>
			<section>
				<label>
					Posted by:{" "}
					<input
						required="true"
						onChange={handleChange}
						name="postedBy"
						value={newTodo.postedBy}
						type="text"
					/>
				</label>
				<label>
					Assigned to:{" "}
					<input
						required="true"
						onChange={handleChange}
						name="assignedTo"
						value={newTodo.assignedTo}
						type="text"
					/>
				</label>
			</section>
			<section>
				<button id="saveTaskButton" type="submit">
					Save Bookmark
				</button>
				<button
					id="cancelTaskButton"
					type="button"
					onClick={handleCancel}>
					Cancel
				</button>
			</section>
		</Task>
	)
}

export default KanbanEntry
