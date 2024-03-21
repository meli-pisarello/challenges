import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

function Input({value, max, text, handleChange}) {
  return (
    <div>
      <input
        type="range" 
        id={text} 
        min="0" 
        max={max} 
        value={value} 
        step="1" 
        onChange={(evt) => handleChange(evt.target.value, value, text)} />
        {text} {value}
    </div>
  )
}

function CharacterAttributes({ totalPoints }) {
  let [health, setHealth] = useState(0);
  let [stamina, setStamina] = useState(0);
  let [speed, setSpeed] = useState(0);
  let [available, setAvailable] = useState(totalPoints);
  const max = totalPoints === 1 ? 1 : Math.floor(totalPoints * 0.7);

  const updatePoints = (value, current, attribute) => {
    value = Math.min(parseInt(value), max);
    const diff = value - current;

    if (diff < 0) {
      setAvailable(available + diff * -1)
    } else if (diff >= available) {
      value = current + available;
      setAvailable(0);
    } else {
      setAvailable(available - diff)
    }

    switch (attribute) {
      case "Health":
        setHealth(value)
        break
      case "Stamina":
        setStamina(value)
        break
      case "Speed": 
        setSpeed(value)
        break
    }
  }
  
  return (
    <div>
      Character stats: <span id="points">{available}</span> points left.
      <Input value={health} max={totalPoints} text="Health" handleChange={updatePoints} />
      <Input value={stamina} max={totalPoints} text="Stamina" handleChange={updatePoints} />
      <Input value={speed} max={totalPoints} text="Speed" handleChange={updatePoints} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);