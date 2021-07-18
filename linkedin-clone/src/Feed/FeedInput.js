import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon'
import FeedInputItem from './FeedInputItem';
import { PersonaCoin, PersonaSize } from '@fluentui/react/lib/Persona'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

function FeedInput({ value, onChange, onSubmit }) {
    const user = useSelector(selectUser);
    return (
        <div class="feedInputContainer">
            <div className="photoInputContainer">
            <PersonaCoin
                imageUrl={user.photoUrl}
                text={user.displayName}
                imageShouldStartVisible={true}
                size={PersonaSize.size40}
                showInitialsUntilImageLoads={true}
                className="photoInput"   
            />
            <div className="feedInput">
                <Icon iconName="EditSolid12" />
                <form>
                    <input value={value}onChange={onChange}placeholder="start a post" type="text" />
                     <button onClick={onSubmit} type="submit">send</button>
                </form>
            </div>
            </div>
            <div className="feedInputToolbar">
                <FeedInputItem iconName="Photo2" color="#70b5f9" title="Photo" />
                <FeedInputItem iconName="BoxPlaySolid" color="#7fc15e" title="Video" />
                <FeedInputItem iconName="EventInfo" color="#e7a33e" title="Event" />
                <FeedInputItem iconName="Articles" color="#fc9295" title="Write article"/>
            </div> 
            
        </div>
    )
}

export default FeedInput
