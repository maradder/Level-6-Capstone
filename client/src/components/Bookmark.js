import React, { useState } from 'react';
import styled from "styled-components"


function Bookmark( props ) {
    const [showSiteName, setShowSiteName] = useState( false )

    const BookmarkTile = styled.div`
        height: 200px;
        width: 200px;
        border-radius: 8px;
        border: 1px solid #121212;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        img {
            justify-self: flex-start;
        }
        a {
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-decoration-line: none;
            justify-self: flex-end;
        }
    
    `

    return (
        <BookmarkTile onMouseEnter={() => setShowSiteName( true )} onMouseLeave={() => setShowSiteName( false )}>
            <img src={props.img} alt={props.site} />
            {showSiteName && <a href={props.url}>{props.site}</a>}
        </BookmarkTile>
    )
}

export default Bookmark