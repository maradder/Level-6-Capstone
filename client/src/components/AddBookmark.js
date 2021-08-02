import React, { useState, useContext } from "react"
import styled from "styled-components"
import { BookmarkContext } from "../context/BookmarkContext"
import plus from "./svg/plus-light.svg"

function AddBookmark() {
	const {showAddBookmark, setShowAddBookmark} = useContext(BookmarkContext)


	const Add = styled.img`
		height: 75px;
		width: 75px;
		margin: auto 0;
		filter: drop-shadow(rgb(0, 0, 0) 0.1rem 0.1rem 0.4rem);
		animation-duration: 50ms;

		:hover {
			background-size: 110%;
			transition-duration: 700ms;
			filter: drop-shadow(rgb(0, 0, 0) 0.8rem 0.8rem 0.8rem);
			transform: rotateZ(90deg);
			animation-duration: 50ms;
		}

		:active {
			background-size: 110%;
			transition-duration: 700ms;
			filter: drop-shadow(rgb(0, 0, 255) 0.1rem 0.1rem 0.1rem);
			transform: rotateZ(90deg);
			animation-duration: 5ms;
		}
	`


	return (
		<>
			<Add src={plus} onClick={ () => setShowAddBookmark(true)} />
		</>
	)
}

export default AddBookmark
