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
                    <h4>Coin Type:</h4>
                    <h4>{coin.coinType}</h4>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <h4>Coin Type:</h4>
                    <h4>{coin.coinType}</h4>
                </div>

            </div>
        </div>
    )
}

export default CoinDetails;