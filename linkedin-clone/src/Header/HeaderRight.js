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
            <Icons  name= "Me" avatar="https://media.istockphoto.com/vectors/abstract-blu…=0&h=Wdgg1tDVgb126pXZnhuB6hzVZ072z5vRBE7W81ieqFE=" />
        </div>
    )
}

export default HeaderRight
