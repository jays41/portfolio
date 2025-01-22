import React from 'react'
import { useState } from 'react';
import info from '../Info.json';

const Education = () => {

  return (
    <section className="section" id="Education">
        <h2>EDUCATION</h2>
          <p><strong>{info.education.university.name}</strong> - {info.education.university.graduation}</p>
          <p>{info.education.university.degree} {info.education.university.grade}</p>
          <p><strong>{info.education.school.name}</strong> {info.education.school.duration}</p>
          <p>{info.education.school.alevels}</p>
          <p>{info.education.school.gcses}</p>
    </section>
  )
}

export default Education