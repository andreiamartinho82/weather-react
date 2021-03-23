import React from "react";
import axios from "axios";

import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div
        id="appstructure"
        
        className="appWraper"
        className="winter"
        className="notThatBad"
      >
        <form id="form">
          <input
            type="text"
            placeholder="Name a city"
            id="cityInput"
            autocomplete="off"
          />

          <input type="submit" value="🔎" />
        </form>

        <div className="row">
          <div className="col-4">
            <h1 id="city">Lisbon</h1>
          </div>

          <div className="col-8">
            <div id="temperatureStyle">
              {" "}
              <h2>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                  id="bigIcon"
                />{" "}
                
                <span id="temp">12</span>{" "}
                <a href="*" id="c" className="active">
                  ºC |
                </a>{" "}
                <a href="*" id="f">
                  ºF{" "}
                </a>
                <span id="description">Clear Sky </span>
                <h2 id="windSpeed">Wind 50 km/h</h2>
                <h2 id="precipitation">Humidity 70%</h2>
                <h2 id="date">Sat 27 Feb 2021</h2>
              </h2>
            </div>
          </div>

          <div className="advices">
            Great Weather. Take your sunglasses and go!
          </div>

          <div id="weekForecast">How ´bout your week</div>

          <div class="row" id="forecastStructure">
            <div id="forecast"></div>

            <div id="forecast"></div>

            <div id="forecast"></div>

            <div id="forecast"></div>

            <div id="forecast"></div>
          </div>

          <div className="toDo">What to do? Here are some ideas:</div>

          <div id="ideas">
            <ul>
              <li id="adA">Photo hunt Challange</li>

              <li id="adB">Safari sample on a local market</li>

              <li id="adC">Go to the beach</li>

              <li id="adD">Barbeque with friends</li>
            </ul>
          </div>

          <div id="final">---or nothing really, just relax</div>
        </div>
      </div>

      <footer>
        {" "}
        <a href="https://github.com/andreiamartinho82" target="blank">
          Coded by Andreia Martinho
        </a>
      </footer>
    </div>
  );
}
