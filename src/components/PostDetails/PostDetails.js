import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostDetails(data));
  }, [postId]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);
  return (
    <div>
      <h3>userId: {postDetails.userId}</h3>
      <h3>id: {postDetails.id}</h3>
      <p>title: {postDetails.title}</p>
      <p>body: {postDetails.body}</p>
      <p>Total comments: {comments.length}</p>
      {comments.map((comment) => (
        <Comments comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default PostDetails;
