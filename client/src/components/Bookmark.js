import React, { useState } from "react"
import styled from "styled-components"
import trashIcon from './svg/trash-solid.svg'

function Bookmark( props ) {
	const {del, id} = props
	const [showSiteName, setShowSiteName] = useState( false )
	const [showDeleteButton, setShowDeleteButton] = useState(false)
	const BookmarkTile = styled.div`
		position: relative;
		height: 75px;
		width: 75px;
		border-radius: 8px;
		border: 1px solid #121212;
		box-shadow: 0.2rem 0.2rem 0.4rem #000000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f3f6f9;
		margin: auto 16px auto 0;

		:hover {
			transform: scaleY(1.0125);
			transform: scaleX(1.0125);
			border-color: #ffffff;
			box-shadow: 0.1rem 0.1rem 0.8rem 0.6rem #ccff00f6;
            cursor: pointer;
		}

		a {
			position: absolute;
			border-radius: 8px;
			font-size: 24px;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
				Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
				sans-serif;
			text-decoration-line: none;
			color: #121212;
			text-transform: capitalize;
			background: radial-gradient(
				circle,
				rgba(247, 255, 249, 1) 0%,
				rgba(255, 255, 255, 0) 100%
			);
		}

        img {
            height: 80%;
            width: 80%,
        }
	`

		const handleRightClick = e => {
			e.preventDefault()
			toggleShowDeleteButton()
		}

		const toggleShowDeleteButton = () => setShowDeleteButton(!showDeleteButton)

		const handleDelete = () => {
			console.log(id)
			del(id)
			toggleShowDeleteButton()
		}

	return (
		<BookmarkTile key={id}
			onMouseEnter={() => setShowSiteName( true )}
			onMouseLeave={() => setShowSiteName( false )}
			onContextMenu={handleRightClick}>
			<img src={showDeleteButton ? trashIcon : props.img} alt={props.site} onClick={handleDelete}/>
			{showSiteName && !showDeleteButton && <a href={props.url}>{props.site}</a>}
		</BookmarkTile>
	)
}

export default Bookmark
