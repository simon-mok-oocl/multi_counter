import logo from './logo.svg';
import './App.css';

import Counter from './component/Counter.js'
import SetCounterSize from './component/SetCounterSize';

function App() {
  return (
    <div>
      <SetCounterSize></SetCounterSize>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
