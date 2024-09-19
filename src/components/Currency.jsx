import React, { useState } from 'react'
import '../css/Currency.css'
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import axios from 'axios';

/* https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_NG9kexTetx7gt7inZnrWaLn5horEzD8HNaP2PMtM&base_currency=EUR */

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_NG9kexTetx7gt7inZnrWaLn5horEzD8HNaP2PMtM";

function Currency() {

    const [amount,setAmount] = useState(0)
    const [fromCurrency,setFromCurrency] = useState("USD")
    const [toCurrency,setToCurrency] = useState("TRY")
    const [result,setResult] = useState(0)
     
    const exchange = async ()=>{
        const link = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        // console.log("link", link)
        const result = (link.data.data[toCurrency]*amount).toFixed(2);
        setResult(result)
    }
  
    return (

    <div className='currency-div'> 
    <div style={{marginTop:"-15px", backgroundColor:"white", color:"red",width:"100%",textAlign:"center", height:"60px", borderRadius:"14px"}}>
        <h3 style={{marginBottom:"40px"}}> EXCHANGE RATE APP</h3>
    </div>
    <div style={{marginTop:"30px"}}>
    <input type="number" className='amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        <select className='from-currency-option' onChange={(e)=>setFromCurrency(e.target.value)}>
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">TRY</option>
        </select>
        <FaArrowRightArrowLeft className='converticon' style={{fontSize:"20px", margin:"-5px 10px", opacity:"0.7",color:"red"}}/>
        <select className='to-currency-option' onChange={(e)=> setToCurrency(e.target.value)}>
            <option value="">TRY</option>
            <option value="">USD</option>
            <option value="">EUR</option>
        </select>
        <input type="number" className='result' value={result} onChange={(e)=>setResult(e.target.value)}/>
    </div>
    <div>
    <button onClick={exchange} style={{backgroundColor:"red",color:"white",padding:"10px",borderRadius:"10px", marginTop:"25px",border:"none",cursor:"pointer"}}>Convert</button>
    </div>
    </div>
       
   
  )
}

export default Currency
