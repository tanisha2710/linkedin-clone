import React from 'react'
import {personaSize, PersonaCoin } from '@fluentui/react/lib/Persona'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

function SideBarProfileCard() {
    const user = useSelector(selectUser);

    return (
        <div className="profileCardContainer">
            <img src="https://media.istockphoto.com/vectors/abstract-blur-background-rainbow-mesh-gradient-color-power-pattern-vector-id1130076181?k=6&m=1130076181&s=612x612&w=0&h=Wdgg1tDVgb126pXZnhuB6hzVZ072z5vRBE7W81ieqFE=" alt="" />
            <PersonaCoin
                className="profilePersona"
                imageUrl={user.photoUrl}
                text={user.displayName}
                imageShouldStartVisible={true}
                size={personaSize.size28}
                showInitialsUntilImageLoads={true}
            />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>              
        </div>
    )
}

export default SideBarProfileCard
