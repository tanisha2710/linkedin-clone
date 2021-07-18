import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginUser, logout } from './features/UserSlice';
import Login from './UserAuthentication/Login';
import { auth } from './FireBase/FireBase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(loginUser({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="appBody">
        <SideBar />
        <Feed />
      </div>
      )}
    </div>
   
  );
}

export default App;
