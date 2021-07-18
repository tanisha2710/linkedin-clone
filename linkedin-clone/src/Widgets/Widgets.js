import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';
import "./Widgets.css";
function Widgets() {
    const article = (heading, subtitle) => {
        return (<div className="articleContainer">
            <div className="articleBullet">
                <Icon className="bulletIcon"iconName="CircleShapeSolid" />
            </div>
            <div className="articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        );
    };
    return (
        <div className="widgetsContainer">
            <div className="widgetsHeader">
                <h2>LinkedIn News</h2>
                <Icon iconName="Info" />
            </div>
            {article("A game Changer for Netflix", "Top news - 8886 readers")}
            {article("CoronaVirus India Update","Top news - 886 readers")}
            {article("Tesla hits new hights", "Cars and auto-300 readers")}
            {article("Bitcoin breaks $22k", "Crypto - 800 readers")}
            {article("Is redux good", "Code - 123 readers")}
            
        </div>
    )
}

export default Widgets
