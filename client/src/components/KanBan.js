import React, { useState, useContext, useEffect } from "react"
import KanBanCard from "./KanBanCard"
import KanbanEntry from "./KanbanEntry"
import TodoCard from "./TodoCard"
import { KanbanContext } from "../context/KanbanContext"
import plus from "./svg/plus-light.svg"
import { KanBans } from "./StyledComponents"



function KanBan(props) {
	const { todoArray} =
		useContext(KanbanContext)
	const [showAddTask, setShowAddTask] = useState(false)

	const toggleAddTask = () => setShowAddTask(!showAddTask)

	const renderKanban = () => {
		return (
			<KanBans id={props.id}>
				<KanBanCard
					path="/kanban/"
					cardTitle="To-Do"
					add={
						<button
							onClick={toggleAddTask}
							style={{
								border: "none",
								backgroundColor: "transparent",
								minWidth: "fit-content",
								minHeight: "fit-content",
								maxWidth: "fit-content",
								maxHeight: "fit-content",
							}}>
							<img src={plus} alt="Add new task"/>
						</button>
					}>
					{showAddTask && <KanbanEntry func={toggleAddTask} />}
					{todoArray.map((todo, index) =>
						todo.status === "todo" ? (
							<TodoCard
								todo={todo}
								key={index}
								title={todo.title}
								id={todo._id}
								status={todo.status}
								description={todo.description}
								postedBy={todo.postedBy}
								assignedTo={todo.assignedTo}
								dueBy={todo.dueBy}
								createdOn={todo.createdOn}
							/>
						) : (
							<></>
						)
					)}
				</KanBanCard>

				<KanBanCard path="/kanban/in_progress" cardTitle="In Progress">
					{todoArray.map((todo, index) =>
						todo.status === "inProgress" ? (
							<TodoCard
								key={index}
								title={todo.title}
								id={todo._id}
								status={todo.status}
								description={todo.description}
								postedBy={todo.postedBy}
								assignedTo={todo.assignedTo}
								dueBy={todo.dueBy}
								createdOn={todo.createdOn}
							/>
						) : (
							<></>
						)
					)}
				</KanBanCard>

				<KanBanCard path="/kanban/review" cardTitle="To Review">
					{todoArray.map((todo, index) =>
						todo.status === "toReview" ? (
							<TodoCard
								key={index}
								title={todo.title}
								id={todo._id}
								status={todo.status}
								description={todo.description}
								postedBy={todo.postedBy}
								assignedTo={todo.assignedTo}
								dueBy={todo.dueBy}
								createdOn={todo.createdOn}
							/>
						) : (
							<></>
						)
					)}
				</KanBanCard>

				<KanBanCard path="/kanban/done" cardTitle="Done">
					{todoArray.map((todo, index) =>
						todo.status === "done" ? (
							<TodoCard
								key={index}
								title={todo.title}
								id={todo._id}
								status={todo.status}
								description={todo.description}
								postedBy={todo.postedBy}
								assignedTo={todo.assignedTo}
								dueBy={todo.dueBy}
								createdOn={todo.createdOn}
							/>
						) : (
							<></>
						)
					)}
				</KanBanCard>
			</KanBans>
		)
	}

	useEffect(() => {
		renderKanban()
	}, [todoArray])

	return <>{renderKanban()}</>
}

export default KanBan
