import React from "react";
import app from "./app.js";

function Location({ data, location, setLocation }) {
  const foundLocation = data.find((item) => item.city === location);
  if (foundLocation)
    return (
      <div className="card">
        <div className="img-container">
          {props.data.forecast === "Sunny" && (
            <img
              className="card-img-top"
              src={sunny}
              alt="Card image cap"
              id="icon"
            />
          )}
          {props.data.forecast === "Rainy" && (
            <img
              className="card-img-top"
              src={rainy}
              alt="Card image cap"
              id="icon"
            />
          )}
          {props.data.forecast === "Partly cloudy" && (
            <img
              className="card-img-top"
              src={partlyCloudy}
              alt="Card image cap"
              id="icon"
            />
          )}
          {props.data.forecast === "Cloudy" && (
            <img
              className="card-img-top"
              src={cloudy}
              alt="Card image cap"
              id="icon"
            />
          )}
        </div>
        <div class="card-body">
          <h3 className="card-title">{props.data.city}</h3>
          <h5 className="card-text">{props.data.temperature}</h5>
          <h5 className="card-text">{props.data.forecast}</h5>
        </div>
      </div>
    );
}

module.exports = Location;
