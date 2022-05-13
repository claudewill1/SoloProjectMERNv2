import React, {useState} from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './form.module.css'

const NewCoin = (props) => {
    const [coinType,setCoinType] = useState("");
    const [year,setYear] = useState("");
    const [mint,setMint] = useState("");
    const [denomination,setDenomination] = useState("");
    const [value,setValue] = useState("");
    const [description,setDescription] = useState("");
    const [graded,setGraded] = useState();
    const [gradingService,setGradingService] = useState("");
    const [certificationNumber,setCertificationNumber] = useState("");
    const [error,setErr] = useState({});
    const [isChecked,setIsChecked] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const newCoin = {
            coinType,
            year,
            mint,
            denomination,
            value,
            description,
            graded,
            gradingService,
            certificationNumber
        }

        axios.post('http://localhost:8000/api/coins/create',newCoin)
        .then(res=> res.data.error ? setErr(res.data.error):navigate('/'))
            .catch(err => console.log(err))
    }
    const handleChecked = (e) => {
        const checked = e.target;
        (checked)?setGraded(true):setGraded(false)
        setIsChecked(!isChecked);
    }
    return (
        <div style={{width:"80%"}} className='container'>
            <div style={{backgroundColor:"black",color:"white",marginBottom:"20px", paddingLeft:'5px',paddingRight:'5px'}} className='d-flex justify-content-between header'>
                <h1>Coin Collecting App</h1>
                <Link to={'/'}>Back to Home</Link>
            </div>
            <h3 style={{paddingRight:"5%"}}>Add a Coin</h3>
            <div style={{height:"auto",padding:"15px",marginBottom:"10px"}} className='border border-solid border-dark'>
                <form className='d-flex flex-column justify-content-between' onSubmit={handleSubmit}>
                    <div id className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Coin Type:</h4>
                        <input onChange={(e)=>setCoinType(e.target.value)} type='text' className="form-control w-50"/>
                        <p className='text-danger'>{error.coinType ? error.coinType._message: ""}</p>
                    </div>
                    
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Year:</h4>
                        <input onChange={(e)=>setYear(e.target.value)} type='number' className="form-control w-50"/>
                        <p className='text-danger'>{error.name ? error.name._message: ""}</p>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Mint:</h4>
                        <input onChange={(e)=>setMint(e.target.value)} type='text' className="form-control w-50"/>
                        <p className='text-danger'>{error.name ? error.name._message: ""}</p>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Denomination</h4>
                        <input onChange={(e)=>setDenomination(e.target.value)} type='text' className="form-control w-50"/>
                        <p className='text-danger'>{error.name ? error.name._message: ""}</p>
                    </div>
                    
                    <div style={{paddingRight:"19%"}} className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Value:</h4>
                        <input onChange={(e)=>setValue(e.target.value)} type='number' className="form-control w-50"/>
                        
                    </div>
                    
                    <div style={{paddingRight:"19%"}} className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Description:</h4>
                        <textarea onChange={(e)=>setDescription(e.target.value)} type='text' rows={4} cols={5} className="form-control w-50"/>
                        
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Graded: <input type="checkbox" onChange={(e)=>handleChecked(e.target.value)}/></h4>
                        
                       
                    </div>
                    
                    <div style={{paddingRight:"33%"}} className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Grading Service:</h4>
                        <select name="" id="" onChange={(e)=>setGradingService(e.target.value)} disabled={isChecked===false?true:false}>
                            Grading Service:
                            <option>---------</option>
                            <option value="ANACS">ANACS</option>
                            <option value="NGC">NGC</option>
                            <option value="PCGS">PCGS</option>
                        </select>
                    </div>
                   
                    <div style={{paddingRight:"19%"}} className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Certification Number:</h4>
                        <input onChange={(e)=>setCertificationNumber(e.target.value)} type='number' className="form-control w-50" disabled={isChecked===false?true:false}/>
                        
                    </div>
                    
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <input style={{marginTop:"10px"}} className='btn btn-primary d-flex justify-content-left' type="submit" value="Add Coin"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewCoin;