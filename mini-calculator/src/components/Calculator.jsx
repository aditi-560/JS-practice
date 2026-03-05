import { useState } from "react";
import Display from "./display";
import Button from "./button";

export default function Calculator() {

  const [input, setInput] = useState("");

  const handleClick = (value) => {
   
    setInput(prev => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearDisplay = () => {
    // setInput("");
    console.log("Hi Clear")
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","+","="
  ];

  return (
    <div className="calculator">
      <Display value={input} />

      <div className="buttons">
        <Button label="C" onclick={clearDisplay}/>
        <Button label="DEL" onclick={deleteLast}/>

        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
             onclick={()=>
                btn=="="?calculateResult():
                handleClick(btn)}
          />
        ))}
      </div>
    </div>
  );
}