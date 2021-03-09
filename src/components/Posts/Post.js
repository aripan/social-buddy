import React from "react";

const Post = (props) => {
  const { title, id } = props.post;
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => props.showDetails(id)}>Show details</button>
    </div>
  );
};

export default Post;
