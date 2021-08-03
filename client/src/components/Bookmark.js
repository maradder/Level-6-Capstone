import React, { useState } from "react"
import trashIcon from './svg/trash-solid.svg'
import { BookmarkTile } from "./StyledComponents"

function Bookmark( props ) {
	const {del, id} = props
	const [showSiteName, setShowSiteName] = useState( false )
	const [showDeleteButton, setShowDeleteButton] = useState(false)


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
