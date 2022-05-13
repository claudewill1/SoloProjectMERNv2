import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import './form.module.css'


const EditCoin = (props) => {
    const {id} = useParams();
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
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/coins/${id}`)
            .then((res)=>{
                const {data} = res;
                setCoinType(data.coinType);
                setYear(data.year);
                setMint(data.mint);
                setDenomination(data.denomination);
                setValue(data.value);
                setGraded(data.graded);
                setGradingService(data.gradingService);
                setCertificationNumber(data.certificationNumber);
            })
            .catch((err)=>console.log(err));
    },[id])
    const handleEditCoin = (e) => {
        e.preventDefault();
        axios.put (`http://localhost:8000/api/coins/${id}/edit`,{
            coinType,
            year,
            mint,
            denomination,
            value,
            description,
            graded,
            gradingService,
            certificationNumber
        })
        .then((res)=>{
            if(res.data.error)  
                setErr(res.data.error)
            else
                navigate('/')
        })
        .catch((err)=>console.log(err));
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
                <form className='d-flex flex-column justify-content-between' onSubmit={handleEditCoin}>
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Coin Type:</h4>
                        <input onChange={(e)=>setCoinType(e.target.value)} type='text' className="form-control w-50" value={coinType}/>
                        <p className='text-danger'>{error.coinType ? error.coinType._message: ""}</p>
                    </div>
                    
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Year:</h4>
                        <input onChange={(e)=>setYear(e.target.value)} type='number' className="form-control w-50" value={year}/>
                        <p className='text-danger'>{error.year ? error.year._message: ""}</p>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Mint:</h4>
                        <input onChange={(e)=>setMint(e.target.value)} type='text' className="form-control w-50" value={mint}/>
                        <p className='text-danger'>{error.mint ? error.mint._message: ""}</p>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Denomination</h4>
                        <input onChange={(e)=>setDenomination(e.target.value)} type='text' className="form-control w-50" value={denomination}/>
                        <p className='text-danger'>{error.denomination ? error.denomination._message: ""}</p>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Value:</h4>
                        <input onChange={(e)=>setValue(e.target.value)} type='number' className="form-control w-50" value={value}/>
                        
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Description:</h4>
                        <textarea onChange={(e)=>setDescription(e.target.value)} type='text' rows={4} cols={5} className="form-control w-50" value={description}/>
                        
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Graded: <input type="checkbox" onChange={(e)=>handleChecked(e.target.value)} checked={isChecked===true?true:false}/></h4>
                        
                        
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Grading Service:</h4>
                        <select name="" id="" onChange={(e)=>setGradingService(e.target.value)} value={gradingService} disabled={isChecked===false?true:false}>
                            Grading Service:
                            <option>---------</option>
                            <option value="ANACS">ANACS</option>
                            <option value="NGC">NGC</option>
                            <option value="PCGS">PCGS</option>
                        </select>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <h4>Certification Number:</h4>
                        <input onChange={(e)=>setCertificationNumber(e.target.value)} type='number' value={certificationNumber} className="form-control w-50" disabled={isChecked===false?true:false}/>
                        <p className="text-danger">{error.name?error.name._message:""}</p>
                    </div>
                    
                    
                    <div className="d-flex flex-row justify-content-evenly form-group">
                        <input style={{marginTop:"10px"}} className='btn btn-primary d-flex justify-content-left' type="submit" value="Update Coin"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCoin;