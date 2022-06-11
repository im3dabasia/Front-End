import React, { useState } from 'react';
import {rawData} from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(rawData);

 

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Messages Today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear Text Log</button>

      </section>
    </main>
  )
}

export default App;
