import React from 'react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import Icons from './Icons';

initializeIcons();
function HeaderRight() {
    return (
        <div className="headerRight">
            <Icons name="Home" iconName="HomeSolid" />
            <Icons name="My Network" iconName="People" />
            <Icons name="Jobs" iconName="SuitCase" />
            <Icons name="Chat" iconName="ChatSolid" />
            <Icons name="Notification" iconName="RingerSolid" />
            <Icons  name= "Me" avatar="https://media-exp3.licdn.com/dms/image/C5103AQH1NG…eta&t=1vMEzSploGLYK4RkiCMb1vd9OGBwDPlF7MP4eTwUwXc" />
        </div>
    )
}

export default HeaderRight
