import React from 'react'
import FeedInput from './FeedInput'
import "./feed.css";
import FeedInputItem from './FeedInputItem';

function Feed() {
    return (
        <div className="feedContainer">
            <FeedInput />
            <div className="feedInputToolbar">
            <FeedInputItem />
            </div>        
        </div>
    )
}

export default Feed
