import React from 'react';
import './ConvertedTemperatureOutput.css'

export const ConvertedTemperatureOutput = (props) => {
  const {numberInput, temperatureType} = props;

  const temperatureConverter = (convertToType) => {
    if (numberInput !== undefined && temperatureType !== undefined) {
      switch (temperatureType) {
        case 'CELSIUS':
          if (convertToType === "FARHENHEIT") {
            return (numberInput * 1.8) + 32
          } else if (convertToType === "KELVIN") {
            return (numberInput + 273.15)
          }
          return numberInput;
        case "FARHENHEIT":
          if (convertToType === "CELSIUS") {
            return (numberInput - 32) / 1.8
          } else if (convertToType === "KELVIN") {
            return (((numberInput -32) * 5) /9) + 273.15
          }
          return numberInput;
        case "KELVIN":
          if (convertToType === "CELSIUS") {
            return (numberInput - 273.15)
          } else if (convertToType === "FARHENHEIT") {
            return ((numberInput - 273.15) * 1.8 ) + 32
          }
          return numberInput;
        default: return 0;
      }
    }
    return 0;
  }

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          stopnie Celsjusza
          <span className="badge badge-primary badge-pill">
            {temperatureConverter("CELSIUS").toFixed(2)}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          stopnie Farhenheita
          <span className="badge badge-primary badge-pill">
            {temperatureConverter("FARHENHEIT").toFixed(2)}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          kelwin
          <span className="badge badge-primary badge-pill">
            {temperatureConverter("KELVIN").toFixed(2)}
          </span>
        </li>
      </ul>
    </div>
  )
}