
const Card = (props) => {
  return (
      <div className="flex-col py-5 px-5 mt-3 w-[300px] bg-blue-200 shadow-xl rounded-lg z-10 font-mono ">
      <h2 className="text-gray-700">{props.title}</h2>
         <p className="text-slate-400">0 of 3 Subtasks</p>  
    </div>
  )
}

export default Card