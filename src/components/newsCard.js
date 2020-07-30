import React from "react";

const newsCard = ({ article }) => {
  const { headline, snippet } = article;

  return (
    <div className="card col-md-4">
      <div className="card-body">
        <h5 className="card-title">{headline.main}</h5>
        <p className="card-text">{snippet}</p>
      </div>
    </div>
  );
};

export default newsCard;
