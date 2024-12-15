import React from 'react'
import { useState } from 'react';

const Education = () => {

  const [isShowing, show] = useState(false);

  return (
    <section className="section">
        <h2>EDUCATION</h2>
        {isShowing ? <button onClick={() => {show(false)}}>Show</button> : 
        <>
          <p><strong>King’s College London</strong> - Expected Graduation May 2027</p>
          <p>BSc Computer Science (expected grade: 1st Class Honours)</p>
          <p><strong>Roundwood Park School</strong> - 2016-2023</p>
          <p>A-Levels: Maths (A*), Further Maths (A*), Computer Science (A), Physics (A)</p>
          <p>GCSEs: 999999999</p>
          <button onClick={() => {show(true)}}>Hide</button>
        </>
        }
    </section>
  )
}

export default Education