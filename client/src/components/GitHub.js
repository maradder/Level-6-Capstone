import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Octokit, App, Action } from "octokit"
import { accessToken } from "../.secrets"
import { WidgetHeader } from "./GlobalComponents"

const GitHubWidget = styled.div`
	height: 41vh;
		width: 45%;
	border: 1px solid #121212;
	border-radius: 8px;
	overflow-y: scroll;
	background-color: #f3f6f9;
	min-width: 300px;

	@media screen and (max-width: 1160px) {
		height: fit-content;
		width: 100%;
	}
`
function GitHub() {
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
		return (
			<div
				style={{
					margin: "16px 8px",
					border: "1px solid #121212",
					borderRadius: "8px",
				}}>
				<h5>{event.type}</h5>
				{/* <p>{event.created_at.toDateString()}</p> */}
				<p>Initiated by: {event.actor.login}</p>
				<p>Repo Name: {event.repo.name}</p>
				{event.type == "PushEvent" ? (
					<h5>
						Commit messages:{" "}
						{event.payload.commits.map(commit => commit.message)}
					</h5>
				) : (
					<p></p>
				)}
			</div>
		)
	})

	useEffect(() => {
		getGitHubData()
	}, [])

	return (
		<GitHubWidget>
			<WidgetHeader>
				<h5>GitHub {gitHubUserState.login}</h5>
				<img
					src={gitHubUserState.avatar_url}
					alt="Avatar"
					style={{
						maxHeight: "50px",
						maxWidth: "auto",
						borderRadius: "50%",
					}}
				/>
			</WidgetHeader>

			{eventList}
		</GitHubWidget>
	)
}

export default GitHub
