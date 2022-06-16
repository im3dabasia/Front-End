import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(1);
  const [text,setText] = useState([])


  function handleSubmit(e) {
    e.preventDefault()
    const figure = document.getElementById('amt').value;

    if (figure > data.length){
      setText(data);
      return
    }
    if (figure < 0){
      setText(data.slice(0,1));
      return
    }
    setText(data.slice(0,figure));
    
  }

  return (

    <section className='section-center'>

      <h3>tired of boring lorem ipsum</h3>
      <form className='result' onSubmit={handleSubmit}>
        <label htmlFor='amt'>paragraphs:


        <input placeholder="Enter weight…" type="number" id ='amt' name='amt'value={count} onChange={(w) => {
          setCount(w.target.value);
          }} />
        

        </label>
        <button className='btn' type='submit'>submit</button>

      </form>
      <p id='all-text'>
        {text.map((item,index) =>{

          return <p key={index}>{item}</p>

      })}
      
      </p>
    </section>
    )
}

export default App;
