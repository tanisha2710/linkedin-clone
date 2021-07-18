import React, { useState,useEffect } from 'react'
import FeedInput from './FeedInput'
import "./feed.css";
import Post from '../FeedPost/Post';
import { db } from '../FireBase/FireBase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';
import  FlipMove  from "react-flip-move";


function Feed() {
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection("posts")
            .orderBy("timeStamp","desc")
            .onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);
    const onSubmit = e => {
        e.preventDefault();
        console.log("came here", db);
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: inputValue,
            photourl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInputValue("");
        
    };
    const onChange = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    console.log(posts);
    return (
        <div className="feedContainer">
            <FeedInput value={inputValue} onChange={onChange} onSubmit={onSubmit} />
            <FlipMove>
            {posts.map(({ id, data: { name, description, message,
                photourl } }) =>
                <Post
                    key={id}
                    name={name}
                    message={message}
                    photoUrl={photourl}
                    description={description}
                />
            )}
            </FlipMove>
        </div>
    )
}

export default Feed
