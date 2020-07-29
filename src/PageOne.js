import React, { useEffect, useState } from "react";

const asyncTask = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a normal component");
    }, 2000);
  });
};

const PageOne = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    asyncTask().then(response => {
      setData(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return <div>{data && <p>{data}</p>}</div>;
};

export default PageOne;
