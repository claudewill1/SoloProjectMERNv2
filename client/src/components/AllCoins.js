import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AllCoins = (props) => {
    const [allCoins,setAllCoins] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/coins')
            .then(res=>{
                console.log(res);
                setAllCoins(res.data).sort();
            })
            .catch(err => console.log(err))
    },[])
    const allCoinsSorted = [...allCoins].sort((a,b)=>(a.coinType < b.coinType ?-1:1));
    const handleRemoveCoin = (id) => {
        axios.delete(`http://localhost:8000/api/coins/${id}`)
            .then((res)=>{
                console.log(res);
                const filteredCoins = allCoins.filter((coin,index)=>{
                    return coin._id !== id;
                })
                console.log(filteredCoins);
                setAllCoins(filteredCoins);
            })
            .catch((err)=>console.log(err))
    };

    return (
        <div className='container'>
            <div style={{backgroundColor:"black",color:"white",marginBottom:"20px"}} className='d-flex justify-content-between header'>
                <h1>Coin Collecting App</h1>
                <Link to={'/coins/create'}>Add Coin To Collection</Link>
            </div>
            <div className='d-flex justify-content-evenly'>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">Coin Type</th>
                            <th scope="col">Year</th>
                            <th scope="col">Mint</th>
                            <th scope="col">Denomination</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCoinsSorted.map((coin,i)=>{
                            return (
                                <tr key={coin._id}>
                                    <td>{coin.coinType}</td>
                                    <td>{coin.year}</td>
                                    <td>{coin.mint}</td>
                                    <td>{coin.denomination}</td>
                                    <td>${coin.value}</td>
                                    <td className='d-flex justify-content-center'>
                                        <button className='btn btn-primary' style={{marginRight:"5px"}}>
                                            <Link className='text-light text-decoration-none' to={`/coins/${coin._id}/edit`}>EDIT</Link>
                                        </button>{" "}
                                        <Link className='btn btn-success text-light text-decoration-none' style={{marginRight:'5px'}} to={`/coins/${coin._id}`}>DETAILS</Link>
                                        <button className='btn btn-danger text-light text-decoration-none' style={{marginRight:'5px'}} onClick={()=>handleRemoveCoin(coin._id)}>DELETE</button>{" "}
                                        
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCoins;