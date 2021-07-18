import React from 'react'
import "./SideBar.css";
import SideBarProfileCard from './SideBarProfileCard';
import ProfileViewStats from './ProfileViewStats';
import SideBarRecent from './SideBarRecent';

function SideBar() {
    return (
        <div className="sideBar">
            <SideBarProfileCard />
            <div className="statsContainer">
                <ProfileViewStats title="Who viewed your profile" count="762" />
                <ProfileViewStats title="Views of your post" count="6233" />
            </div>
            <SideBarRecent />

        </div>
    )
}

export default SideBar
