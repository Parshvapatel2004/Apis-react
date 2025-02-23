import { useState } from "react";

import React from "react";

const Fetchapi = () => {
  return (
    <div>
      {/* <ApiComp /> */}
      <TableData/>
      
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


function TableData() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then((response) => response.json())
      .then((response) => {
        setData(response.data[0].regional);
      });
    console.log(data);
  };
  return (
    <center style={{ margin: "50px" }}>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>SR no</th>
            <th>City</th>
            <th>ConfirmedCasesIndian</th>
            <th>ConfirmedCasesForeign</th>
            <th>Discharged</th>
            <th>Deaths</th>
            <th>TotalConfirmed</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.loc}</td>
                  <td>{element.confirmedCasesIndian}</td>
                  <td>{element.confirmedCasesForeign}</td>
                  <td>{element.discharged}</td>
                  <td>{element.deaths}</td>
                  <td>{element.totalConfirmed}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={20} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={apiGet}>Fetch </button>
    </center>
  );
}