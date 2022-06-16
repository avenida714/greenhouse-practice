import ReactSlider from "react-slider";
import './Thermometer.css';
import useClimateContext from '../../context/ClimateContext';
import {useEffect, useState} from 'react';

function Thermometer() {
  const {temperature, setTemperature} = useClimateContext();
  const [targetTemp, setTargetTemp] = useState(temperature);

  useEffect(() =>{
    const changeTemp = setTimeout(() => {
      if(targetTemp > temperature){
        setTemperature(prevTemp => ++prevTemp)
      }
      if(targetTemp < temperature){
        setTemperature(prevTemp => --prevTemp)
      }
    }, 1000)
    return () => clearTimeout(changeTemp);
  }, [temperature,targetTemp])
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={targetTemp}
        onAfterChange={(val) => {setTargetTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
