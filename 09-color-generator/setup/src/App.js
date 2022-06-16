import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [clr,setClr] = useState('');
  const [clrsArr,setClrsArr] = useState([]);
  const [error,setError]  = useState(false);
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    try {
      const temp = new Values(clr).all(10);
      setClrsArr(temp);

    } catch (error) {
      setError(true);
      console.log(error);      
    }
  }


  return (
    <div>

    <section className='container'>
{/* title="This is not a 6 digit hexadecimal color value"  */}
    {/* pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"  */}
      <h3>Color generator</h3>
      <form onSubmit={ handleSubmit }>
        <label htmlFor='hexColor'>
          <input className={`${error ? 'error' : null}`}  autoComplete='off' type='text' placeholder='#f15025' id='hexColor' name='hexColor' value={clr} onChange={(e) => setClr(e.target.value)}  ></input>
        </label>
        <button className='btn' type='submit'>Submit</button>
      </form>



    </section>
          <section className='colors'>
          <SingleColor />  

        </section>
        </div>

  )
}

export default App

