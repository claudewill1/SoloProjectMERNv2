import React, {useState} from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const NewCoin = (props) => {
    const [coinType,setCoinType] = useState("");
    const [year,setYear] = useState("");
    const [mint,setMint] = useState("");
    const [denomination,setDenomination] = useState("");
    const [value,setValue] = useState("");
    const [description,setDescription] = useState("");
    const [graded,setGraded] = useState("");
    const [gradingService,setGradingService] = useState("");
    const [certificationNumber,setCertificationNumber] = useState("");
    const [error,setError] = useState({});

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
            .then(res=> res.data.error ? setError(res.data.error):navigate('/'))
            .catch(err => console.log(err))
    }
}