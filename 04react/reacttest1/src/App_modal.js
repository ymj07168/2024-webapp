import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    "1. hihihihi",
    "1. hihihihi",
    "1. hihihihi",
    "1. hihihihi",
  ]);

  const [num, setNum] = useState(0);
  const [modal, setModal] = useState(false);

  const listView = () => {
    alert("ddd");
  };

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              listView(i);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default App;
