import React from 'react'
import Sections from './Sections'
import { useStoreContext } from "./../context/store-context";

const Body = () => {
  const [store] = useStoreContext();
  return (
    <div className="w-full flex justify-around">
      {store.map((v) => (
        <Sections key={v.id} {...v} />
      ))}
    </div>
  );
}

export default Body