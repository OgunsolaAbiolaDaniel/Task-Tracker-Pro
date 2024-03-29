import Card from "./card"
import { useState } from "react"
function Sections(props) {
    const [showCard, setShowCard] = useState(false);
    function handleShow(){setShowCard(true);}
    
  return (
      <div>
          <h3 className="text-lg text-slate-600 font-mono flex items-center gap-2 ml-5">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              {props?.label}{props?.tasks?.length}
          </h3> 
          <ul>
              {
                 props?.tasks ? props?.tasks.map((v, index) => (
                      <Card key={v.id} {...v} />
                    )) : null
              }
          </ul>
     </div>
  )
}

export default Sections