import React from 'react';
import App from './App';

const Categories = ({categories, filterData}) => {
  return <section>
    <div className='btn-container '>
      {/* {categories.map((cat) => console.log(cat))} */}

    {categories.map( (category, index) => {
          return <button key ={index} onClick={()=>(filterData(category))} className='filter-btn '>{category}</button>
    }
    )}

        </div>
  </section>


        // <div className='btn-container '>
        //   <button onClick={()=> filterData('all')} className='filter-btn '>All</button>
        //   <button onClick={()=> filterData('breakfast')} className='filter-btn '>Breakfast</button>
        //   <button onClick={()=> filterData('lunch')} className='filter-btn '>Lunch</button>
        //   <button onClick={()=> filterData('shakes')} className='filter-btn '>Shakes</button> 
        //   </div>



  
  
};

export default Categories;
