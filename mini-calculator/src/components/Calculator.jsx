import { useState } from "react";
import Button from './button';
import Display from './display';

export default function Calculator(){
  
  const [input, setInput] = useState("");
  
  const handleClick = (value) =>{
    setInput(prev => prev + value);
  }
  
  const calculateResult = () => {
    try{
      setInput(eval(input).toString());
    }catch{
      setInput('an error occured');
    }
  }
  
  const clearInput = () => {
    console.log("clear");
    setInput("");
  }

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  }
  
  const buttons = [
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3" ,"+",
    "0", "/", ".","="
  ]
  
  return(
    <div className="calculator">
        

      <Display value={input}/>
      <div className="buttons">

      <Button label="C" onclick={clearInput} />
      <Button label="del" onclick={deleteLast} />

      
        {buttons.map((btn) => (
          <Button
          key={btn}
          label={btn}
          onclick={() =>
            btn === "="
            ? calculateResult()
            : handleClick(btn)
          }
          />
        ))}
        </div>
      

    </div>
  );


}