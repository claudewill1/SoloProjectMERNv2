import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import '../components/form.module.css'
const CoinDetails = (props) =>{
    const {id} = useParams();
    const [coin,setCoin] = useState({});
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/coins/${id}`)
        .then((res)=>{
            const { data } = res;
            console.log(res);
            setCoin(data);
        })
        .catch((err)=>console.log(err));
    },[])

    return (
        <div style={{width:"80%"}} className='container'>
            <div style={{backgroundColor:"black",color:"white",marginBottom:"20px", paddingLeft:'5px',paddingRight:'5px'}} className='d-flex justify-content-between header'>
                <h1>Coin Collecting App</h1>
                <Link to={'/'}>Back to Home</Link>
            </div>
            <div className='d-flex justify-content-between'>
                <h3 style={{paddingRight:"25%"}}>Details about: {coin.year} {coin.coinType}</h3>
            </div>
            <div className='border border-solid border-dark'>
                <div className='d-flex flex-row justify-content-evenly'>
                    <h4>Coin Type:</h4>
                    <h4>{coin.coinType}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <h4>Year:</h4>
                    <h4>{coin.year}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <h4>Mint:</h4>
                    <h4>{coin.mint}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <h4>Denomination:</h4>
                    <h4>{coin.denomination}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    {coin.value !== null &&
                        <h4>Value:</h4>
                    }
                    <h4>${coin.value}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    {coin.description !== '' &&
                        <h4>Description:</h4>
                    }
                    <p>{coin.description}</p>
                </div>
                
                <div className='d-flex flex-row justify-content-eventy'>
                { coin.graded === true &&
                    <h4>Grading Service:</h4>
                }
                    <h4>{coin.gradingService}</h4>
                </div>
                <div className='d-flex flex-row justify-content-eventy'>
                    {coin.graded === true &&
                        <h4>Certification Number:</h4>
                    }
                        <h4>{coin.certificationNumber}</h4>
                </div>
                <div style={{marginBottom:'10px'}} className='d-flex flex-row justify-content-evenly'>
                    <button className='btn btn-primary' style={{marginRight:"5px"}}>
                        <Link className='text-light text-decoration-none' to={`/coins/${coin._id}/edit`}>EDIT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoinDetails;