import React, { useState } from "react";
import { useQuery } from "react-query";
import { getNews } from "./services/news.api";
import NewsCard from "./components/newsCard";
import "./main.css";

export default function App() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useQuery(["getNews", page], getNews);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-primary mr-1" onClick={() => setPage(1)}>
            Page 1
          </button>
          <button className="btn btn-primary" onClick={() => setPage(2)}>
            Page 2
          </button>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}

      {isError && <p>An error has occurred</p>}

      <div className="row mx-1 my-2">
        {data?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
