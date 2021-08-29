import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './components/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className="App">
      <h2>Falimier: {familiar.toString()}</h2>

      <button onClick ={ () => setFamiliar(!familiar)}>Toggle Friend</button>

      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
