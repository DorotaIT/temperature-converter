import React, {useState} from 'react';
import './WeatherBoard.css';
import { TemperatureInputField } from './TemperatureInputField'
import { ConvertedTemperatureOutput } from './ConvertedTemperatureOutput'

export const WeatherBoard = () => {
  const [numberInput, setNumberInput] = useState();
  const [temperatureType, setTemperatureType] = useState();

  const callbackTemperatureData = (numberInput, temperatureType) => {
    setNumberInput(numberInput);
    setTemperatureType(temperatureType);
    console.log(numberInput, temperatureType)
}

  return (
    <div>
      <TemperatureInputField 
        callbackTemperatureData={callbackTemperatureData}
      />
      <ConvertedTemperatureOutput 
        numberInput={numberInput}
        temperatureType={temperatureType}
      />
    </div>
  )
}