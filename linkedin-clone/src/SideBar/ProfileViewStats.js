import React from 'react'

function ProfileViewStats({title, count}) {
    return (
        <div className="profileViewStats">
            <p>{title}</p>
            <p className="statsCountStyles">{count}</p>
        </div>
    )
}

export default ProfileViewStats
