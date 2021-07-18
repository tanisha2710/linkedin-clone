import React, {forwardRef} from 'react'
import "./Post.css";
import { PersonaCoin, PersonaSize } from '@fluentui/react/lib/Persona';
import FeedInputItem from '../Feed/FeedInputItem';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="postHeader">
            <PersonaCoin
                imageUrl={photoUrl}
                text={name}
                imageShouldStartVisible={true}
                size={PersonaSize.size40}
                showInitialsUntilImageLoads={true}
            />
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
})

export default Post
