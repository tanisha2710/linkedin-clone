import React from 'react'
import "./Post.css";
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import FeedInputItem from '../Feed/FeedInputItem';

function Post({ name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="postHeader">
                <Persona imageUrl={photoUrl} size={PersonaSize.size40} />
                <div className="headerInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="postBody">
                <p>{message}</p>
            </div>
            <div className="postButtons">
                <FeedInputItem iconName="Like" title="Like" color="gray" />
                <FeedInputItem iconName="Comment" title="Comment" color="gray"/>
                <FeedInputItem iconName="Share" title="Share" color="gray" />
                <FeedInputItem iconName="Send" title="Send" color="gray" />
            </div>
            
        </div>
    )
}

export default Post
