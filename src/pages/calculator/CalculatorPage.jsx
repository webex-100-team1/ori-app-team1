import { useState } from "react";
import "./CalculatorPage.css";

function CalculatorPage() {
  const [a, setA] = useState("");
  const [op, setOp] = useState("");
  const [b, setB] = useState("");
  const [message, setMessage] = useState("");

  const pressNumber = (n) => {
    setMessage("");
    if (op === "") {
      setA(a + n);
    } else {
      setB(b + n);
    }
  };

  const pressOperator = (o) => {
    if (a !== "" && b === "") {
      setOp(o);
    }
  };

  const pressEqual = () => {
    if (a !== "" && op !== "" && b !== "") {
      const x = Number(a);
      const y = Number(b);
      let result = 0;
      if (op === "+") {
        result = x + y;
      }
      if (op === "-") {
        result = x - y;
      }
      if (op === "×") {
        result = x * y;
      }
      if (op === "÷") {
        if (y === 0) {
          setMessage("0では割れません");
          setA("");
          setOp("");
          setB("");
          return;
        }
        result = x / y;
      }
      setA(String(result));
      setOp("");
      setB("");
    }
  };

  const pressClear = () => {
    setA("");
    setOp("");
    setB("");
    setMessage("");
  };

  return (
    <div className="calculator">
      <h1>おもしろ電卓</h1>
      <div className="display">
        {a === "" ? "0" : a} {op} {b}
      </div>
      <p>{message}</p>
      {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((n) => (
        <button key={n} onClick={() => pressNumber(n)}>
          {n}
        </button>
      ))}
      <br />
      {["+", "-", "×", "÷"].map((o) => (
        <button key={o} onClick={() => pressOperator(o)}>
          {o}
        </button>
      ))}
      <button onClick={pressEqual}>=</button>
      <button onClick={pressClear}>C</button>
    </div>
  );
}

export default CalculatorPage;
