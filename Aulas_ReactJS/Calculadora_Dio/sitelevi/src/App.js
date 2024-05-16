import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fisrtNumber, setFisrtNUmber] = useState("0");
  const [operation, setOperation] = useState("0");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFisrtNUmber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const hadleSumNumbers = () => {
    if (fisrtNumber === "0") {
      setFisrtNUmber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(fisrtNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation();
    }
  };
  const hadleSubNumbers = () => {
    if (fisrtNumber === "0") {
      setFisrtNUmber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(fisrtNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation();
    }
  };
  const hadleMultNumbers = () => {
    if (fisrtNumber === "0") {
      setFisrtNUmber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(fisrtNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation();
    }
  };
  const hadleDividiNumbers = () => {
    if (fisrtNumber === "0") {
      setFisrtNUmber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divid = Number(fisrtNumber) / Number(currentNumber);
      setCurrentNumber(String(divid));
      setOperation();
    }
  };

  const handleEquals = () => {
    if (fisrtNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          hadleSumNumbers();
          break;
        case "-":
          hadleSubNumbers();
          break;
        case "*":
          hadleMultNumbers();
          break;
        case "/":
          hadleDividiNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => hadleMultNumbers()} />
          <Button label="/" onClick={() => hadleDividiNumbers()} />
          <Button label="c" onClick={() => handleOnClear()} />
          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => hadleSubNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => hadleSumNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
};
export default App;
