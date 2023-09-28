import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import kakaoLogin from '../../assets/images/kakaoLogin.png';
import './login.css';

function Login() 
{
    const Rest_api_key='c105c81a4b71d2b2b6eb5313272815ef' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/auth' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
        <div>
            <img 
                src={kakaoLogin} 
                className='login'
                onClick={handleLogin}/>
        </div>
    )
}

export default Login;