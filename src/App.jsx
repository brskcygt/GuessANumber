import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background: white;
  border: 1px solid none;
  border-radius: 10%;
`;

const Input = styled.input`
  height: 50px;
  width: 80%;
  margin: 20px;
  border: 1px solid none;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
`;

const Result = styled.span`
  color: black;
  font-size: 36px;
  font-weight: 500;
  color: red;
  transition: color 0.5s ease;
`;

const Submit = styled.button`
  width: 200px;
  height: 60px;
  font-size: 20px;
  margin-right:10px;
`;

const Buttons = styled.div`
  display: flex;
`;

function App() {
  const [number, setNumber] = useState(null);
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("Yeni Bir Tahmin Yap");

  const setRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);
    setResult("Yeni Bir Tahmin Yap");
  }

  useEffect(() => {
    setRandomNumber();
  },[]);

  const Compare = () => {
    if (guess && guess > number) {
      setResult("Daha Küçük");
    } else if (guess && guess < number) {
      setResult("Daha Büyük");
    } else {
      setResult("Tebrikler");
    }
  };

  return (
    <Container>
      <Result>{result}</Result>
      <Input value={guess} onChange={(e) => setGuess(e.target.value)} />
      <Buttons>
        <Submit onClick={Compare}>Tahmin Yap</Submit>
        <Submit onClick={setRandomNumber}>Reset</Submit>
      </Buttons>
    </Container>
  );
}

export default App;
