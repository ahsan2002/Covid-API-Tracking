import React, { useEffect,useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Statewise.css";

const Statewise = () => {
  const[data,setdata]=useState([]);

  const getcovidapi = async () => {
    const res = await fetch("https://data.covid19india.org/data.json"); //in pending state
    const actualdata = await res.json();
    console.log(actualdata.statewise);
    setdata(actualdata.statewise);
  };

  useEffect(() => {
    getcovidapi();
  }, []);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="main-heading">
          <h1 className="mb-4 text-center">
            <strong>India</strong> Covid-19 Dashboard
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">

            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updates</th>
              </tr>
            </thead>

            <tbody>
              {
              data.map((elem,ind)=>{
                return(
                  <tr key={ind}>
                  <td>{elem.state}</td>
                  <td>{elem.confirmed}</td>
                  <td>{elem.recovered}</td>
                  <td>{elem.deaths}</td>
                  <td>{elem.active}</td>
                  <td>{elem.lastupdatedtime}</td>
                </tr>
                )
              })}
              
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;