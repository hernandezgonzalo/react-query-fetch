import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { getNews } from "./services/news.api";

const PageOne = () => {
  const { isLoading, isError, data } = useQuery(["getNews", 1], getNews);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;

  return (
    <div>
      {data.map((article, index) => (
        <Fragment key={index}>
          <h4>{article.headline.main}</h4>
          <p>{article.snippet}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default PageOne;
