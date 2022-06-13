import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);
  // console.log((categories))
  
  const buttonCat = () => {
    const tempCategories = (menuItems.map((item) => item.category));
    const uniqueCategories = ['all', ...new Set(tempCategories)]
    setCategories(uniqueCategories);
    return

  };

  useEffect(() => {
    buttonCat()
  },[]);


  const filterData = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category ===   category  );
    setMenuItems(newItems);
    console.log('33',newItems)
  }


  return <main className='menu'>
    <h2 className='title '>Our Menu</h2>
    <div className='underline'></div>



    <Categories categories={categories} filterData={filterData} /> 
    <Menu items={menuItems} />
    
  </main>
}

export default App;
