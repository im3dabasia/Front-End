import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = () => {
  return <article className='color false'> 
    <p className='percent-value'>percentage</p>
    <p className='color-value'>hex color</p>
  </article>
}

export default SingleColor
