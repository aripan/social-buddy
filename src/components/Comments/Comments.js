import React from "react";

const Comments = (props) => {
  const { name, email } = props.comment;
  return (
    <div>
      <h5>{name}</h5>
      <p>{email}</p>
    </div>
  );
};

export default Comments;
