import React from 'react';
import styled from "styled-components"
import bookmarks from "../context/BookmarkContext"
import Bookmark from './Bookmark';

function Bookmarks() {
    const bookmarkList = bookmarks.map( bookmark => {
        return (
            <Bookmark site={bookmark.siteName} url={bookmark.url} img={bookmark.img} />
        )
    } )
    return (
        <>
            {bookmarkList}
        </>
    )
}

export default Bookmarks