import './ClimateStats.css';
// import {ClimateContext} from '../../context/ClimateContext';
// import {useContext} from 'react';
import useClimateContext from '../../context/ClimateContext';

function ClimateStats() {

  // const {temperature, humidity} = useContext(ClimateContext);
  const {temperature, humidity} = useClimateContext();


  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
