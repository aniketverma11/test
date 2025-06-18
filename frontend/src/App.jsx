import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    setError('');
    setResult(null);
    if (isNaN(Number(a)) || isNaN(Number(b))) {
      setError('Please enter valid numbers.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8000/${operation}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ a: Number(a), b: Number(b) })
      });
      const data = await response.json();
      if (data.error) setError(data.error);
      else setResult(data.result);
    } catch (err) {
      setError('API error. Is the backend running?');
    }
  };

  return (
    <div className="calculator beautiful-calculator">
      <h1>🧮 Calculator</h1>
      <div className="calc-panel">
        <input
          type="number"
          placeholder="First number"
          value={a}
          onChange={e => setA(e.target.value)}
          className="calc-input"
        />
        <select value={operation} onChange={e => setOperation(e.target.value)} className="calc-select">
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <input
          type="number"
          placeholder="Second number"
          value={b}
          onChange={e => setB(e.target.value)}
          className="calc-input"
        />
        <button onClick={handleCalculate} className="calc-btn">Calculate</button>
      </div>
      {result !== null && <div className="result success">Result: {result}</div>}
      {error && <div className="error fail">{error}</div>}
      <footer className="calc-footer">Made with <span style={{color:'#61dafb'}}>React</span> & <span style={{color:'#009688'}}>FastAPI</span></footer>
    </div>
  );
}

export default App