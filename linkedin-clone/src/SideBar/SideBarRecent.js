import React from 'react'

function SideBarRecent() {
    const lists = ["jobInterviews", "machinelearning", "recruitment", "womenintech", "hr"];
    const recentList = lists.map(list => (<div className="sideBarRecentItem">
        <span className="sideBarHash">#</span>
        <p>{list}</p>
    </div>));
    return (
        <div className="sideBarRecentContainer">
            <p>Recent</p>
            {recentList}
        </div>
    )
}

export default SideBarRecent
