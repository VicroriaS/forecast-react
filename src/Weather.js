import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row"></div>
        <div className="col-9">
          <input
            type="search"
            placeholder="Type the city..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="Submit" value="Search" className="btn btn-primary" />
        </div>
      </form>

      <h1>Odessa</h1>
      <ul>
        <li>Wednesday 12:00 </li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="Sunny" />{" "}
        </div>
        10 C
      </div>
      <div className="col-6">
        <div />
        <ul>
          <li>Precipitations:15%</li>
          <li>Humidity:72%</li>
          <li>Wind:5 km/h</li>
        </ul>
      </div>
    </div>
  );
}
