import React from 'react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { PersonaSize, PersonaCoin } from '@fluentui/react/lib/Persona';
import "./Icons.css";

initializeIcons();
function Icons({ avatar,name, iconName, onClick, showAvatar, displayName}) {
    return (
        <div onClick={onClick}className="IconStyles">
            {iconName && <Icon className="icon" iconName={iconName} />}
            {showAvatar &&
                <PersonaCoin
                className="avatar"
                imageUrl={avatar}
                text={displayName}
                imageShouldStartVisible={true}
                size={PersonaSize.size28}
                showInitialsUntilImageLoads={true}
            />
            }
            <h3 className="title">{name}</h3>
        </div>
    )
}

export default Icons
