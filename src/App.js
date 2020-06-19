import React, {useState} from 'react';
import Message from './message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isCredit, setCredit] = useState(true);

  return (
    <div className= {`box ${isCredit ? 'daylight' : ''}`}>
      <h1 className= {'country'}> پاکستان زندہ آباد </h1>
      
      <h1> {isCredit ? 'Congratulation! You are eligible to Apply' : 'Sorry, you are Not Eligible due to Low Credit'}</h1>
      
      <button onClick={() => setCredit(!isCredit)} className= {'updateCredit'}>
        Update Credit
      </button>
      <br />
      <Message counter={count} />
      
      <button onClick={() => setCount(count + 1  ) } className= {'updateCounter'}>
        Increase Value 
      </button>
     
      <button onClick={() => setCount(count - 1)} className= {'decrease'}>
        Decrease Value
      </button>
      <br />
      <button onClick={() => setCount(0)}>Reset Value</button>
    </div>
  );
}

export default App;
