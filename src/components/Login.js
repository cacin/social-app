import React, { useState } from 'react';
import S from '../style/S.Login';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [LoginError, setLoginError] = useState(''); 
    let token = '';

    const handleSubmit = (e) => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'https://akademia108.pl/api/social-app/user/login', 
            JSON.stringify(userLogin),
            { 'headers': headers })
            .then((req) => {
                if(req.data.error){
                    setLoginError(`Nie udało się zalogować. Sprawdź login i hasło`);
                }else if (req.data.password){
                    setLoginError(req.data.password[0]);
                }else if(!req.data.error){
                    setLoginError(`Logowanie poprawne`);
                    token = req.data.jwt_token;
                }
                



            }).catch((error) => {
                setLoginError(`Błąd serwera : ${error.response.status} ${error.response.statusText}`);
            })

        }

        let userLogin = {
            username: userName,
            password: userPass,
            ttl: 3600
        }

       
 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "userName") setUserName(value);
        if (name === "userPass") setUserPass(value);
      }

    return(
        <div>
            <h2>Zaloguj się</h2>
            <S.Form onSubmit={handleSubmit}>
                <S.Label>
                    <S.Span> Nazwa użytkownika</S.Span>
                    <S.Input value={userName} type="text" id="userName" name="userName" onChange={handleInputChange} required/>
                </S.Label>
                <S.Label>
                    <S.Span>Hasło</S.Span>
                    <S.Input  value={userPass} type="password" id="userPass" name="userPass" onChange={handleInputChange} required/>
                </S.Label>
                 <div>{LoginError}</div>
                <S.Button type="submit">Zloguj się</S.Button>
            </S.Form>
            <S.A href="/signup">Zarejestruj się, aby korzytać z Sociala</S.A>
        </div>
    );
}
export default Login;