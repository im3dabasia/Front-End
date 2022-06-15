import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [review,setReview] = useState([]);
  const [index,setIndex] = useState(1);


  const checkIndex =(num) =>{
    if (num > (data.length -1)){
      return 0
    }
  }

  const nextSlide = () => {
    const temp = index
    setIndex(checkIndex(temp+1))
  } 

  const lastSlide = () => {
    const temp = index
    setIndex(checkIndex(temp-1))
  } 


  




  return (<section className='section'>
    <h2 className='title'> <span>/</span>Reviews</h2>

    <div className='section-center'>



      {data.map((item,revIndex) => {
          const {id,image,name, title,quote} = item;

          let position = 'nextSlide';
          if (revIndex === index ){
            position = 'activeSlide'
          }
          if (revIndex === (index-1)){
            position = 'lastSlide'
          }
        
          
          return(
            <article className={position} key={id}>
              <img src={image} className='person-img'></img>
              <h4> {title}</h4>
              <p>{title}</p>
              <p className='text'>{quote}</p>

              <button onClick={lastSlide}  className='icon prev'>
                <FiChevronLeft/>

              </button>
              <button  onClick={nextSlide} className='icon next'>
                <FiChevronRight/>
              </button>
              < FaQuoteRight className='icon'/>


            </article>


          )



      })}


    </div>

  </section>)
}

export default App;
