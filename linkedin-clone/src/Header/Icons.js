import React from 'react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import "./Icons.css";

initializeIcons();
function Icons({ avatar,name, iconName}) {
    return (
        <div className="IconStyles">
            {iconName && <Icon className="icon" iconName={iconName} />}
            {avatar && <Persona imageUrl={avatar}  className="avatar" size={PersonaSize.size28} />}
            <h3 className="title">{name}</h3>
        </div>
    )
}

export default Icons
