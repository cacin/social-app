import React, {useState} from 'react';

const SignUp = () =>{

    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickError, setNickError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setpasswordError] = useState(null);
    const [password2Error, setpassword2Error] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nick, email, password, password2);

        if(nick === ''){
            setNickError(`'Nazwa użytkownika' nie może być pusty`);
        }else if (/\s/.test(nick)){
            setNickError(`'Nazwa użytkownika' nie może zawierać spacji`);
        }else if (nick.length<4){
            setNickError(`'Nazwa użytkownika' musi zawierać minimum 4 znaki`); 
        }else setNickError(null);



        if(email === ''){
            setEmailError(`'e-mail' nie może być pusty`);
        }else if (/\s/.test(email)){
            setEmailError(`'e-mail' nie może zawierać spacji`);
        }else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            setEmailError(`'e-mail' jest niepoprawny`); 
        }else setEmailError(null);
        

        if(password === ''){
            setpasswordError(`'Hasło' nie może być puste`);
        }else if (/\s/.test(password)){
            setpasswordError(`'Hasło' nie może zawierać spacji`); 
        }else if (password.length<6){
            setpasswordError(`'Hasło' musi składać sie z min. 6 znaków`);
        }else if (! /\d/.test(password)){
            setpasswordError(`'Hasło' musi zawierać przynajmniej 1 cyfrę`); 
        }else if (! /!|#|@|\$|%/.test(password)){
            setpasswordError(`'Hasło' musi zawierać przynajmniej 1 znak specjalny: ! @ # $ %`); 
        }else setpasswordError(null);

       


        if(password2 === ''){
            setpassword2Error(`'Hasło' nie może być puste`);
        }else if (password !== password2){
            setpassword2Error(`'Hasła' są różne`); 
        }else setpassword2Error(null);
        
        console.log(nickError, emailError, passwordError, password2Error);
        

        if((nickError === null) &&
            (emailError === null) &&
            (passwordError === null) &&
            (password2Error === null)){
            let newUser = {
                username: nick,
                email: email,
                password: password,
            }
            console.log(newUser);
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
            <form onSubmit={handleSubmit}>
                <label>
                    Nazwa użytkownika:
                    <input onChange={changeNick} value={nick} type="text" id="nick" name="nick"/>
                </label>
                <div>{nickError}</div>
                <label>
                    e-mail: 
                    <input onChange={changeEmail}value={email} type="text" id="email" name="email" />
                </label>
                <div>{emailError}</div>
                <label>
                    Hasło:
                    <input onChange={changePassword}value={password} type="password" id="password" name="password" />
                </label>
                <div>{passwordError}</div>
                <label>
                    Potwierdź hasło
                    <input onChange={changePassword2}value={password2} type="password" id="password2" name="password2" />
                </label>
                <div>{password2Error}</div>
                <input type="submit" value="Zarejestruj"/>
            </form>
        </div>
    );
}
export default SignUp;