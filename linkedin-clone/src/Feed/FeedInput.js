import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon'
import FeedInputItem from './FeedInputItem';

function FeedInput() {
    return (
        <div class="feedInputContainer">
            <div className="feedInput">
                <Icon iconName="EditSolid12" />
                <form>
                    <input placeholder="start a post" type="text" />
                    <button type="submit"> send</button>
                </form>
            </div>
            <div className="feedInputToolbar">
                <FeedInputItem iconName="Photo2" color="#70b5f9" title="Photo" />
                <FeedInputItem iconName="BoxPlaySolid" color="#7fc15e" title="Video" />
                <FeedInputItem iconName="EventInfo" color="#e7a33e" title="Event" />
                <FeedInputItem iconName="Articles" color="#fc9295" title="Write article"/>
            </div> 
            
        </div>
    )
}

export default FeedInput
