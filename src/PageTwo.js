import React from "react";
import { useQuery } from "react-query";

const asyncTask = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This component uses React Query");
    }, 2000);
  });
  return promise;
};

const PageOne = () => {
  const { isLoading, isError, data } = useQuery("asyncTask2", asyncTask);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred</p>;

  return <div>{data && <p>{data}</p>}</div>;
};

export default PageOne;
