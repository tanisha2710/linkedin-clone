import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon'

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
            
        </div>
    )
}

export default FeedInput
