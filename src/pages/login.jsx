import { Button } from "../ui/button";
import styled from "styled-components";
import { useState } from "react";

const TitleWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 30px;
  font-weight: bold;
`;

const InputWrapper = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  border: 0;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: auto;
  margin-top: 40px;
  background-color: #b4b0b0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: #000 4px 4px 4px;
`;

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onClickHandler = () => {
    props.onClickHome('home');
    console.log(`${username} e ${password}`)
  }

  const handleChangeUsername = (event) => {
    setUsername(event.currentTarget.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  }

  return (
    <Wrapper>
      <TitleWrapper>Login</TitleWrapper>
      <form>
        <InputWrapper
          type="text"
          placeholder="Digite o Usuário"
          onChange={handleChangeUsername} />
        <InputWrapper
          type="password"
          placeholder="Digite a Senha"
          onChange={handleChangePassword} />
      </form>
      <Button onClick={onClickHandler} text='Ir Para Home' />
    </Wrapper>
  )

}