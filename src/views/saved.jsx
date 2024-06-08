import React from "react";

const Saved = ({info}) => {
  return (
    <div>
      <h1>{info.username}</h1>
      <p>
        <strong>Rating:</strong> {info.rating}
      </p>
      <p>
        <strong>Description:</strong> {info.description}
      </p>
      <p>
        <strong>Posted On:</strong> {info.createdAt}
      </p>
    </div>
  );
}

export default Saved;
