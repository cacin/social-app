import React, {useState} from 'react';
import axios from 'axios';
import S from '../style/S.SignUp';

const SignUp = () =>{

    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickError, setNickError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setpasswordError] = useState(null);
    const [password2Error, setpassword2Error] = useState(null);
    const [userSignUp, setuserSignUp] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(nick, email, password, password2);


        /* walidacja użytkownika */
        let errorNickTmp = null;
        if(nick === ''){
            errorNickTmp=(`'Nazwa użytkownika' nie może być pusty`);
        }else if (/\s/.test(nick)){
            errorNickTmp=(`'Nazwa użytkownika' nie może zawierać spacji`);
        }else if (nick.length<4){
            errorNickTmp=(`'Nazwa użytkownika' musi zawierać minimum 4 znaki`); 
        }
        setNickError(errorNickTmp);

        /* Walidacja e-mail */
        let errorEmailTmp = null;
        if(email === ''){
            errorEmailTmp =(`'e-mail' nie może być pusty`);
        }else if (/\s/.test(email)){
            errorEmailTmp =(`'e-mail' nie może zawierać spacji`);
        }else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            errorEmailTmp =(`'e-mail' jest niepoprawny`); 
        }
        setEmailError(errorEmailTmp);

       /*  Walidacja hasła */
       let errorPasswordTmp = null;
        if(password === ''){
            errorPasswordTmp = (`'Hasło' nie może być puste`);
        }else if (/\s/.test(password)){
            errorPasswordTmp = (`'Hasło' nie może zawierać spacji`); 
        }else if (password.length<6){
            errorPasswordTmp = (`'Hasło' musi składać sie z min. 6 znaków`);
        }else if (! /\d/.test(password)){
            errorPasswordTmp = (`'Hasło' musi zawierać przynajmniej 1 cyfrę`); 
        }else if (! /!|#|@|\$|%/.test(password)){
            errorPasswordTmp = (`'Hasło' musi zawierać przynajmniej 1 znak specjalny: ! @ # $ %`); 
        }
        setpasswordError(errorPasswordTmp);
       

       /*  Walidacja powtórzenia hasła */
       let errorPassword2Tmp = null;
        if(password2 === ''){
            errorPassword2Tmp =(`'Hasło' nie może być puste`);
        }else if (password !== password2){
            errorPassword2Tmp =(`'Hasła' są różne`); 
        }
        setpassword2Error(errorPassword2Tmp);

        
        if((errorNickTmp === null) &&
            (errorEmailTmp === null) &&
            (errorPasswordTmp === null) &&
            (errorPassword2Tmp === null)){
            let newUser = {
                username: nick,
                email: email,
                password: password,
            }

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            axios.post(
                'http://akademia108.pl/api/social-app/user/signup', 
                JSON.stringify(newUser),
                { 'headers': headers })
                .then((req) => {
                    
                let user = req.data;    
                    if(user.signedup){
                        setuserSignUp(`Użytkonik ${user.user.username} został poprawnie zarejestrowany`);
                    }else{
                        setuserSignUp(`błąd rejestracji: ${user.user.username}`);
                    }
                    setNick('');
                    setEmail('');
                    setPassword('');
                    setPassword2('');


            }).catch((error) => {
                setuserSignUp(`Błąd serwera : ${error.response.status} ${error.response.statusText}`);
            })

        }
   
       
       
    }
    const changeNick = (e) => {
        setNick(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword= (e) => {
        setPassword(e.target.value);
    }
    const changePassword2 = (e) => {
        setPassword2(e.target.value);
    }

    return(
        <div>
            <h2>Utwórz konto</h2>
            <S.Form onSubmit={handleSubmit}>
                <S.Label>
                    <S.Span>Nazwa użytkownika:</S.Span>
                    <S.Input onChange={changeNick} value={nick} type="text" id="nick" name="nick"/>
                </S.Label>
                <S.Div>{nickError}</S.Div>
                <S.Label>
                    <S.Span>Adres e-mail:</S.Span>
                    <S.Input onChange={changeEmail} value={email} type="text" id="email" name="email" />
                </S.Label>
                <div>{emailError}</div>
                <S.Label>
                    <S.Span>Hasło:</S.Span>
                    <S.Input onChange={changePassword} value={password} type="password" id="password" name="password"  />
                </S.Label>
                <div>{passwordError}</div>
                <S.Label>
                    <S.Span>Powtórz hasło:</S.Span>
                    <S.Input onChange={changePassword2} value={password2} type="password" id="password2" name="password2"  />
                </S.Label>
                <div>{password2Error}</div>
                <S.Button type="submit">Zarejestruj się</S.Button>
            </S.Form>
            <S.Div>{userSignUp}</S.Div>
        </div>
    );
}
export default SignUp;