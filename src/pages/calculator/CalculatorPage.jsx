import { useState } from "react";
import CalcButton from "./CalcButton.jsx";
import "./CalculatorPage.css";

function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState("");
  const [waiting, setWaiting] = useState(false);

  // 計算する。0 で割るときは null を返す
  const calculate = (a, b, op) => {
    if (op === "+") {
      return a + b;
    }
    if (op === "-") {
      return a - b;
    }
    if (op === "×") {
      return a * b;
    }
    if (op === "÷") {
      if (b === 0) {
        return null;
      }
      return a / b;
    }
    return b;
  };

  // 0.1 + 0.2 のようなずれをなくして、文字にする
  const toText = (value) => {
    return String(Math.round(value * 10000000000) / 10000000000);
  };

  const showError = () => {
    setDisplay("エラー");
    setFirstNumber(null);
    setOperator("");
    setWaiting(true);
  };

  const pressNumber = (n) => {
    if (waiting) {
      setDisplay(n);
      setWaiting(false);
    } else if (display === "0") {
      setDisplay(n);
    } else {
      setDisplay(display + n);
    }
  };

  const pressDot = () => {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const pressOperator = (op) => {
    if (display === "エラー") {
      return;
    }
    if (firstNumber !== null && operator !== "" && !waiting) {
      const result = calculate(firstNumber, Number(display), operator);
      if (result === null) {
        showError();
        return;
      }
      setDisplay(toText(result));
      setFirstNumber(result);
    } else {
      setFirstNumber(Number(display));
    }
    setOperator(op);
    setWaiting(true);
  };

  const pressEqual = () => {
    if (firstNumber !== null && operator !== "" && !waiting) {
      const result = calculate(firstNumber, Number(display), operator);
      if (result === null) {
        showError();
        return;
      }
      setDisplay(toText(result));
      setFirstNumber(null);
      setOperator("");
      setWaiting(true);
    }
  };

  const pressClear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator("");
    setWaiting(false);
  };

  return (
    <div className="calculator">
      <h1>おもしろ電卓</h1>
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <CalcButton label="C" type="clear" onClick={pressClear} />
        <CalcButton label="7" onClick={() => pressNumber("7")} />
        <CalcButton label="8" onClick={() => pressNumber("8")} />
        <CalcButton label="9" onClick={() => pressNumber("9")} />
        <CalcButton
          label="÷"
          type="operator"
          onClick={() => pressOperator("÷")}
        />
        <CalcButton label="4" onClick={() => pressNumber("4")} />
        <CalcButton label="5" onClick={() => pressNumber("5")} />
        <CalcButton label="6" onClick={() => pressNumber("6")} />
        <CalcButton
          label="×"
          type="operator"
          onClick={() => pressOperator("×")}
        />
        <CalcButton label="1" onClick={() => pressNumber("1")} />
        <CalcButton label="2" onClick={() => pressNumber("2")} />
        <CalcButton label="3" onClick={() => pressNumber("3")} />
        <CalcButton
          label="-"
          type="operator"
          onClick={() => pressOperator("-")}
        />
        <CalcButton label="0" onClick={() => pressNumber("0")} />
        <CalcButton label="." onClick={pressDot} />
        <CalcButton label="=" type="operator" onClick={pressEqual} />
        <CalcButton
          label="+"
          type="operator"
          onClick={() => pressOperator("+")}
        />
      </div>
    </div>
  );
}

export default CalculatorPage;
