import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);




  return <main className='menu'>
    <h2 className='title '>Our Menu</h2>
    <div className='underline'></div>
    <Categories/>
    <Menu items={menuItems} />
  </main>
}

export default App;
