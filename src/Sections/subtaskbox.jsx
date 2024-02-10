import React, { createContext, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5';
export const Textinput = createContext(text);

function Subtaskbox() {
    const [text, setText] = useState("")

    function handleInputedText(event) {
        setText(event.target.value)
    }
    return (
      <>
        <div className='flex items-center  justify-start gap-3'>
          <input
            className="border-solid font-mono border border-inherit w-[80%] h-7 rounded-lg px-2 text-xs "
            placeholder="e.g add some omelettes"
            type="text"
            name=""
            onChange={handleInputedText}
            id="" />
          
            <button type="button" className="text-slate-400  w-[10%]">
              <IoClose size={18} />
            </button>
         
        </div>
      </>
    );
}

export default Subtaskbox