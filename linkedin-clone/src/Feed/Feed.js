import React, { useState,useEffect } from 'react'
import FeedInput from './FeedInput'
import "./feed.css";
import Post from '../FeedPost/Post';
import { db } from '../FireBase/FireBase';
import firebase from 'firebase';


function Feed() {
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState([]);
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
            name: "Tanisha",
            description: "testing",
            message: inputValue,
            photourl: "",
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
            {posts.map(({ id, data: { name, description, message,
                photoUrl } }) =>
                <Post
                    key={id}
                    name={name}
                    message={message}
                    photoUrl={photoUrl}
                    description={description}
                />
            )}
        </div>
    )
}

export default Feed
