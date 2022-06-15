import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [review,setReview] = useState(data);
  const [index,setIndex] = useState(1);


  useEffect( () => {
    const lastIndex = review.length -1;
    if (index < 0){
      setIndex(lastIndex);
    }
    if (index > (review.length -1)){
      setIndex(0);
      
    }

  } ,[index,review] )



  // for sliding automation 

  useEffect( () => {
    let slider =  setInterval(() => {
      setIndex(index+1);}, 5000);


      return() => clearInterval
    }, [index]);

  

  const nextSlide = () => {
    const temp = index
    setIndex((temp+1))
  } 

  const lastSlide = () => {
    const temp = index
    setIndex((temp-1))
  } 



  return (<section className='section'>
    <h2 className='title'> <span>/</span>Reviews</h2>

    <div className='section-center'>



      {review.map((item,revIndex) => {
          const {id,image,name, title,quote} = item;

          let position = 'nextSlide';
          if (revIndex === index ){
            position = 'activeSlide'
          }
          if (revIndex === (index-1) || index === 0 && revIndex === (data.length -1)){
            position = 'lastSlide'
          }
        
          
          return(
            <article className={position} key={id}>
              <img src={image} className='person-img'></img>
              <h4> {name}</h4>
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
