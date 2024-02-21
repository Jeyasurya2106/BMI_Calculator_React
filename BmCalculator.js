import { useState } from "react";
import bmibg from './bmibg.webp';

function Bmicalculation() {
    const[height,setheight]=useState("");
    const[weight,setweight]=useState("");
    const[age,setage]=useState("");
    const[bmi,setbmi]=useState(null);
    const[status,setstatus]=useState("");
    const[Error,setError]=useState("");

    const calculation=()=>{
        const heightinMeters=(height/100);
        const bmivalue=weight/(heightinMeters*heightinMeters);
        setbmi(bmivalue.toFixed(2));
    if(bmivalue <=18.4){
        setstatus("underweight");
    }
    else if(bmivalue >=18.5 && bmivalue <24.9){
        setstatus("normal");
    }
    else if(bmivalue >=25.0 &&bmivalue <39.9){
        setstatus("overweight");
    }
    else if(bmivalue >=40.0){
        setstatus("obese")
    }  
    else{
        setError("Enter a Numeric Values")
    } 
    }
    const clear=()=>{
    
       setheight("");
       setweight("");
       setage("");
       setbmi(null);
       setstatus("");
       setError("");
    }
    return(
      <div>
      <h1 style={{textAlign:"center",color:"red"}}>BMI CALCULATION</h1>
    <table  style={{marginLeft:"490px",marginTop:"50px",color:"blue",width:"600px",height:"250px",backgroundColor:"#e1e8f2",textAlign:"center",}}>
    <tr>
      <td> 
      <label htmlFor="age">Age:</label>
      </td>
      <td>
      <input type="text" id="age" value={age} onChange={(e)=>setage(e.target.value)}/>
      </td>
    </tr>
    <tr>
      <td>
      <label htmlFor="height">Height (cm):</label>
      </td>
      <td>
      <input type="text" id="height" value={height} onChange={(e)=>setheight(e.target.value)}/>
      </td>
    </tr>
    <tr>
      <td>
      <label htmlFor="weight">Weight (kg):</label>
      </td>
      <td>
      <input type="text" id="weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
      </td>
    </tr>
    <tr>
      <td colSpan="2">
      <button onClick={calculation} style={{color:"white",backgroundColor:"black",height:"30px"}}>calculateBMI</button>
      <br></br>
      <button onClick={clear}  style={{color:"white",backgroundColor:"black"}}>Reset</button>
      </td>
    </tr>
    </table>
    {bmi!= null &&  (
    <div style={{backgroundColor:"greenyellow",width:"300px",height:"120px",textAlign:"center",marginLeft:"640px",marginTop:"10px"}}>
       <h1 style={{marginTop:"20px"}} >BMI value:{bmi}</h1>
        <h2>Status:{status}</h2>
    </div>
    ) }

    {Error && (<h1>Error : {Error}</h1>)}
      </div>
    );
        
};
export default Bmicalculation;