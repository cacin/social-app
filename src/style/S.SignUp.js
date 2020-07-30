import styled from 'styled-components';

export const S = {
    Form: styled.form`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `,

    Button: styled.button`
    background-color: #1da1f2;
    color: #fff;
    width: 250px;
    margin: 20px;
    border: 0;
    border-radius: 50px;
    padding: 10px ;
    outline: none;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer; 
    transition: 0.4s;
    &:hover{
        background-color: #1e80bd;
    }
    `,
    Label: styled.label`
    background-color: rgb(232, 240, 254);
    margin-top: 15px;
    position: relative;
    `,

    Input: styled.input`
    margin: 0;
    padding: 12px 10px 5px 10px;
    outline: 0;
    border: 0;
    width: 300px;
    border-bottom: 2px solid #6e757c;
    font-size: 16px;
    background-color: rgb(232, 240, 254);
    transition: 0.4s;
    &:focus{
        border-bottom: 2px solid #1da1f2;
        color: #219deb;
    }
    `,
    Span: styled.span`
    margin: 0px 7px;
    display: block;
    text-align: left;
    font-size: 8px;
    color: #6e757c;
    position: absolute;
    &.info{
        color: red;
        left: auto;
        right: 0;
        font-weight: bold;
    }
    `,

    Div: styled.div`
    color: red;
    font-size: 10px;
    `
}

export default S;