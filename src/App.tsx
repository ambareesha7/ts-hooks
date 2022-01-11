import React from 'react';
import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
    </div>
  );
}

export default App;
