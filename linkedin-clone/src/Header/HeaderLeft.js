import React from 'react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import "./Header.css";

initializeIcons();
function HeaderLeft() {
    return (
        <div className="headerLeft">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
            <div className="search">
                <Icon iconName="Search" />
                <input type="text" placeholder="Search"/>
            </div>
            
        </div>
    )
}

export default HeaderLeft
