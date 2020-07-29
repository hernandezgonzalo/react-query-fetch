import React, { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function App() {
  const [view, setView] = useState(1);

  return (
    <>
      <button onClick={() => setView(1)}>Page 1</button>
      <button onClick={() => setView(2)}>Page 2</button>
      {view === 1 ? <PageOne /> : <PageTwo />}
    </>
  );
}
