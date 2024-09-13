import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  // [{id: ddd, userId: wer, title: ddd}, {},{}]
  return (
    <div>
      <button onClick={onClick}>클릭</button>
      {data.map((item) => (
        <p key={item.id}>
          userId: {item.userId}, title: {item.title}
        </p>
      ))}
    </div>
  );
};

export default App;
