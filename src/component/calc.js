import React, { useState } from "react";
import "./calc.css";

export default function Calc() {
    const [result,setResult]=useState("");
    
    const handleChange=(e)=>{
        return(
            setResult(result.concat(e.target.name))
        )
    }
    const reset=()=>{
        return(setResult(" "));
    }
    const backSpace=()=>{
        return(
            setResult(result.slice(0,-1))
        )
    }
    const ans=()=>{
        
            try{
                setResult(eval(result).toString())
            }
            catch(error){
                setResult("Error")
            }
           
        
    }

    return (
        <div className="container">
            <div className="calc">
                <input type="text" value={result}></input>
                <div className="numbers">
                <section>
                    <button onClick={reset}>AC</button>
                    <button onClick={backSpace}>DEL</button>
                    <button name="." onClick={handleChange}>.</button>
                    <button name="/" onClick={handleChange}>/</button>
                </section>
                <section>
                    <button name="7" onClick={handleChange}>7</button>
                    <button name="8" onClick={handleChange}>8</button>
                    <button name="9" onClick={handleChange}>9</button>
                    <button name="*" onClick={handleChange}>*</button>
                </section>
                <section>
                    <button name="4" onClick={handleChange}>4</button>
                    <button name="5" onClick={handleChange}>5</button>
                    <button name="6" onClick={handleChange}>6</button>
                    <button name="+" onClick={handleChange}>+</button>
                </section>
                <section>
                    <button name="1" onClick={handleChange}>1</button>
                    <button name="2" onClick={handleChange}>2</button>
                    <button name="3" onClick={handleChange}>3</button>
                    <button name="-" onClick={handleChange}>-</button>
                </section>
                <section>
                    <button name="00" onClick={handleChange}>00</button>
                    <button name="0" onClick={handleChange}>0</button>
                    <button name="=" onClick={ans} className="equal">=</button>
                </section>
                </div>
                
            </div>
        </div>

    )
}