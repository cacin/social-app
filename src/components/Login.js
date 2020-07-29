import React from 'react';

function Login(){
    return(
        <div>
            <h2>Zaloguj się</h2>
            <form action="">
                <label>
                    Nazwa użytkownika
                    <input type="text" id="nick" name="nick" required/>
                </label>
                <label>
                    Hasło
                    <input type="password" id="password" name="password" required/>
                </label>
                <input type="submit" value="Zloguj się"/>
            </form>
            <a href="/signup">Zarejestruj się, aby korzytać z Sociala</a>
        </div>
    );
}
export default Login;