import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Post from "../Posts/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const showDetails = (postId) => {
    history.push(`/posts/${postId}`);
  };
  return (
    <div>
      <h2>This is Home</h2>
      <p>I got total {posts.length} posts</p>
      {posts.map((post) => (
        <Post showDetails={showDetails} post={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default Home;
