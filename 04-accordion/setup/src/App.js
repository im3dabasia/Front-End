import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // return <h2>accordion project setup</h2>;
  const [questions ,setQuestions] = useState(data);

  function singleQue(que){
    return <SingleQuestion key={que.id} {...que}/>
  }
  return <main>
    <div className='container'>
      <h3>Questions and Answers About Login</h3>
      <section>
      {questions.map(singleQue)}

      </section>
      
    </div>
  </main>
}

export default App;
