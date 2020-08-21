import React, {useState} from 'react';
import './TemperatureInputField.css'

export const TemperatureInputField = (props) => {
  const {callbackTemperatureData} = props;
  const [numberInputValue, setNumberInputValue] = useState('');
  const [selectTemperatureType, setSelectTemperatureType] = useState();
  const [isValid, setIsValid] = useState();

  const handleNumberInput = (event) => {
    const value = event.target.value;
    checkFieldValidation(value, selectTemperatureType);
    setNumberInputValue(value);
  }

  const checkFieldValidation = (inputValue, tempType) => {
    if (inputValue === "" || ( tempType === "NONE" || tempType === undefined ) ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  } 

  const handleChooseTemperatureType = (event) => {
      const value = event.target.value;
      checkFieldValidation(numberInputValue, value);
      setSelectTemperatureType(value);
  }

  const handleCalcItem = () => {
    const parsedNumber = parseInt(numberInputValue);
    callbackTemperatureData(parsedNumber, selectTemperatureType);
  }

  const handleEnterKeyPress = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      if(isValid) {
        handleCalcItem();
      }
      return false;
    }
  }

  return (
    <div className="row">
      <form className="col-md-6">
        <div className="form-group">
          <input 
            type="number" 
            className="form-control"  
            placeholder="Podaj liczbę"
            onChange={handleNumberInput}
            value={numberInputValue}
            onKeyPress={handleEnterKeyPress}
          />
        </div>
      </form>

          
      <div className="input-group mb-3 col-md-6">
        <select 
          className="custom-select" 
          id="inputGroupSelect02"
          onChange={handleChooseTemperatureType}
        >
          <option value="NONE">Wybierz...</option>
          <option value="CELSIUS">stopień Celsjusza</option>
          <option value="FARHENHEIT">stopień Farhenheita</option>
          <option value="KELVIN">kelwin</option>
        </select>
        <button 
          type="button" 
          className="btn btn-secondary ml-3"
          disabled={!isValid}
          onClick={handleCalcItem}
          
        >
          Przelicz
        </button>
      </div>
    </div>
  )
}