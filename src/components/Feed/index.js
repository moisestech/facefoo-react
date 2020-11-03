import "./feed.css";
import { useEffect, useState } from "react";

// COMPONENTS
import Post from "./components/Post";
import MessageSender from "./components/MessageSender";
import StoryReel from "./components/StoryReel";
import db from "../../state/firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db.collection("post")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snapshot) => {
    //     setPosts(
    //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    //     );
    //   });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}
