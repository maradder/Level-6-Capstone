import React, { useContext } from 'react';
import styled from "styled-components"
import { UserContext } from '../context/UserContext';
import AddBookmark from './AddBookmark';
import { BookmarkContext } from '../context/BookmarkContext';
import Authentication from './Authentication';
import NewBookmarkForm from './NewBookmarkForm';
import Bookmark from './Bookmark';
import LogoutIcon from "./svg/signout.svg"
import plus from "./svg/plus-light.svg"


const BookmarkList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: row;
    }

    button {
        background-color: transparent;
        outline: none;
        border: none;
        width: fit-content;
        height: fit-content;
    }
    `

const LogoutButton = styled.img`
height: 50px;
width: 50px;
margin: auto 0;
filter: drop-shadow(rgb(0, 0, 0) 0.1rem 0.1rem 0.4rem);

:hover {
    background-size: 110%;
    transition-duration: 350ms;
    filter: drop-shadow(rgb(0, 0, 0) 0.8rem 0.8rem 0.8rem);
}

:active {
    background-size: 110%;
    transition-duration: 350ms;
    filter: drop-shadow(rgb(0, 0, 255) 0.1rem 0.1rem 0.1rem);
}
`

function Bookmarks() {
    const { user, token, logout } = useContext( UserContext )
	const { bookmarkArray, setBookmarkArray, addBookmark, deleteBookmark, showAddBookmark, setShowAddBookmark } =
		useContext(BookmarkContext)
        
    const bookmarkList = bookmarkArray.map( bookmark => {
        return (
            <Bookmark site={bookmark.siteName} url={bookmark.url} img={bookmark.img} del={deleteBookmark} id={bookmark._id}/>
        )
    } )
    return (
        <BookmarkList>
            <div>
            {bookmarkList}
            <AddBookmark />
            {showAddBookmark && <NewBookmarkForm/>}
            </div>
            <button onClick={logout}><LogoutButton src={LogoutIcon} onClick={logout} alt="Log Out"/></button>
        </BookmarkList>
    )
}

export default Bookmarks