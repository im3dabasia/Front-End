import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
const [index,setIndex] = useState(0);
const {Id,name,job,image,text} = people[index];

return <article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className='person-img' ></img>
  </div>
  <div className='info'>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p >{text}</p>

  </div>
    <div className='button-container'>
      <button onHover={console.log('Left')}className='prev-btn'>
        <FaChevronLeft/>
      </button>
      <button onClick={console.log('right')} className='next-btn'>
        <FaChevronRight/>
      </button>

    </div>
</article>
};

export default Review;
