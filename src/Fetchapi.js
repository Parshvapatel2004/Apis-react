import { useState } from "react";

export default function ApiComp() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then((response) => response.json())
      .then((response) => {
        setData(response.data[2].day);
      });
  };
  console.log(data);
  return (
    <>
      <h1>Api data is : {data}</h1>
      <button onClick={apiGet}>fetch</button>
    </>
  );
}


