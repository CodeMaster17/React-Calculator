import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    else {
      const value = calc.slice(0, -1);
      setCalc(value);
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <h5>-- A React App created from scratch --</h5>
      <div className="container">
        <div className="calculator">
          <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp; {calc || "0"}
          </div>
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}><ion-icon name="close-outline"></ion-icon></button>
          <button onClick={() => updateCalc('/')}>/</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
      <div className="socialLinks">
        <h2>Contact Developer</h2>
        <ul>
          <li><a target="_blank" href="https://www.instagram.com/harshit._._.yadav/"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100073748185719" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a target="_blank" href="https://twitter.com/home?lang=en"><ion-icon name="logo-twitter"></ion-icon></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
