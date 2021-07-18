import React from 'react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import Icons from './Icons';
import { useDispatch } from 'react-redux';
import { logout } from '../features/UserSlice';
import { auth } from '../FireBase/FireBase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

initializeIcons();
function HeaderRight() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOutApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className="headerRight">
            <Icons name="Home" iconName="HomeSolid" />
            <Icons name="My Network" iconName="People" />
            <Icons name="Jobs" iconName="SuitCase" />
            <Icons name="Chat" iconName="ChatSolid" />
            <Icons name="Notification" iconName="RingerSolid" />
            {user ? (
                <Icons name="Sign out" showAvatar={true} displayName={user.displayName} avatar={user.photoUrl} onClick={logOutApp} />
            ) : (
                    <Icons name="Me" showAvatar={true} />
                )
            }
        </div>
    )
}

export default HeaderRight
