import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon'
import { bold } from 'colorette'

function FeedInputItem({ title, iconName, color}) {
    return (
        <div className="feedInputItemContainer">
            <Icon iconName={iconName} style={{ color: color, fontWeight:"bolder" }} />
            <h4>{title}</h4>
        </div>
    )
}

export default FeedInputItem
