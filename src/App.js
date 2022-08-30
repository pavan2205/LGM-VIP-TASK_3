import React,{useState,useRef,useEffect} from 'react';
import './App.css'
function App() {
  const [result,setResult]=useState("");
  const inputRef=useRef(null)
  useEffect(()=>inputRef.current.focus())
  function handleclick(e){
    setResult(result.concat(e.target.name));
    e.target.classList.add('click');
  }
  function clearUp(){
    setResult("");
  }
  function back_space(){
    setResult(result.slice(0,-1))
  }
  function evaluate(){
    try{
    setResult(eval(result).toString());
    }
    catch(error){
      setResult("Error")
    }
  }
  return (
    <div className="Calculator">
      <from>
        <input type="text" ref={inputRef} value={result}/>
      </from>
      <div className='keypad'>
        <button onClick={clearUp}id='clear'>Clear</button>
        <button onClick={back_space}id='backspace'>C</button>
        <button name="+" onClick={handleclick} id='operator1'>+</button>
        <button name="7" onClick={handleclick}>7</button>
        <button name="8" onClick={handleclick}>8</button>
        <button name="9" onClick={handleclick}>9</button>
        <button name="-" onClick={handleclick} id='operator2'>-</button>
        <button name="4" onClick={handleclick}>4</button>
        <button name="5" onClick={handleclick}>5</button>
        <button name="6" onClick={handleclick}>6</button>
        <button name="*" onClick={handleclick} id='operator3'>*</button>
        <button name="1" onClick={handleclick}>1</button>
        <button name="2" onClick={handleclick}>2</button>
        <button name="3" onClick={handleclick}>3</button>
        <button name="/" onClick={handleclick} id='operator4'>/</button>
        <button name="0" onClick={handleclick}>0</button>
        <button name="." onClick={handleclick}>.</button>
        <button onClick={evaluate}id='result'>=</button>
      </div>
    </div>
  );
}

export default App;
