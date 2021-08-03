import React, { useState, useEffect } from "react"
import { Octokit } from "octokit"
import { accessToken } from "../.secrets"
import { WidgetHeader } from "./GlobalComponents"
import {GitHubWidget, Event} from './StyledComponents'


function GitHub(props) {
	const octokit = new Octokit({ auth: accessToken })
	const [gitHubUserState, setGitHubUserState] = useState({})
	const [gitHubEvents, setGitHubEvents] = useState([])

	const getGitHubData = () => {
		octokit.rest.users
			.getAuthenticated()
			.then(promise => setGitHubUserState(promise.data))

		octokit
			.request("/users/maradder/events")
			.then(res => setGitHubEvents(res.data))
	}

	const eventList = gitHubEvents.map(event => {
		const createdObject = new Date(event.created_at)

		return (
			<Event id={props.id}>
				<p className="label">
					{event.type}{" "}
					<p className="commitContent">
						{createdObject.toDateString()}
					</p>
				</p>
				{/* <p>{event.created_at.toDateString()}</p> */}
				<p className="label">
					Initiated by: <p>{event.actor.login}</p>
				</p>
				<p className="label">
					Repo Name: <a href={event.repo.url}>{event.repo.name}</a>
				</p>
				{event.type === "PushEvent" ? (
					<p className="commits label">
						Commit messages:{" "}
						<span>
							{event.payload.commits.map(commit => (
								<p className="commitContent">
									{commit.message}
								</p>
							))}
						</span>
					</p>
				) : (
					<p></p>
				)}
			</Event>
		)
	})

	useEffect(() => {
		getGitHubData()
	}, [])

	return (
		<GitHubWidget>
			<WidgetHeader>
				<h5>GitHub {gitHubUserState.login}</h5>
				<a href={gitHubUserState.html_url}>
					<img
						src={gitHubUserState.avatar_url}
						alt="Avatar"
						style={{
							maxHeight: "50px",
							maxWidth: "auto",
							borderRadius: "50%",
						}}
					/>
				</a>
			</WidgetHeader>

			{eventList}
		</GitHubWidget>
	)
}

export default GitHub
