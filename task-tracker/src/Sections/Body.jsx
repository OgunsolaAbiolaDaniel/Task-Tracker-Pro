import React from 'react'
import Sections from './Sections'

const Body = () => {
  return (
    <div className="w-full flex justify-around">
      <Sections name="Todo" number="(4)" />
      <Sections name="Doing" number="(4)"  />
      <Sections name="Done" number="(4)" />
    </div>
  );
}

export default Body