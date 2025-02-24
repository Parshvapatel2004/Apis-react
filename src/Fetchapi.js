import { useState } from "react";

import React from "react";

const Fetchapi = () => {
  return (
    <div>
      {/* <ApiComp /> */}
      <Tabledata/>
      
    </div>
  );
};

export default Fetchapi;

function ApiComp() {
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


function Tabledata(){
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then((response) => response.json())
      .then((response) => {
        setData(response.data[0].regional);
      });
  };
  console.log(data);
  return (
    <>
      <center>
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>State</th>
              <th>confirmedCasesIndia</th>
              <th>confirmedCasesForeign</th>
              <th>Discharged</th>
              <th>Deaths</th>
              <th>TotalConfirmed</th>
            </tr>
          </thead>
          {data.map((a, b) => {
            return (
              <tr key={b}>
                <td>{b + 1}</td>
                <td>{a.loc}</td>
                <td>{a.confirmedCasesIndian}</td>
                <td>{a.confirmedCasesForeign}</td>
                <td>{a.discharged}</td>
                <td>{a.deaths}</td>
                <td>{a.totalConfirmed}</td>
              </tr>
            );
          })}
        </table>
        <button onClick={apiGet}>fetch</button>
      </center>
    </>
  );
}

