import ReactSlider from "react-slider";
import "./Hygrometer.css";
// import {ClimateContext} from '../../context/ClimateContext';
// import {useContext} from 'react';
import { useState, useEffect } from "react";
import useClimateContext from "../../context/ClimateContext";

function Hygrometer() {
  // const {humidity, setHumidity} = useContext(ClimateContext);
  const {humidity, setHumidity} = useClimateContext();
  const [targetHumidity, setTargetHumidity] = useState(humidity);

  useEffect(() =>{
    const changeHumidity = setTimeout(() => {
      if(targetHumidity > humidity){
        setHumidity(prevHumid => ++prevHumid)
      }
      if(targetHumidity < humidity){
        setHumidity(prevHumid => --prevHumid)
      }
    }, 1000)
    return () => clearTimeout(changeHumidity);
  }, [humidity,targetHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={targetHumidity}
        onAfterChange={(val) => {setTargetHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
