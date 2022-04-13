import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(true);
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {error && <ErrorMsg>Invalid email or password</ErrorMsg>}
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  background-color: #ffcb74;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  width: 320px;
  font-size: 1.2rem;
  background-color: #ffcb74;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #ffcb74;
  }
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 1.2rem;
  margin: 10px;
`;
