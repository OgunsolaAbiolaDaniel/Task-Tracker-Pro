import { IoClose } from 'react-icons/io5';

function SubtaskInput({index, value, onChange, onRemove}) {

  const handleChange = (e) => {
    onChange(index, e.target.value);
  };

  const handleRemove = () => {
    onRemove(index);
  };
  return (
    <>
      <div className="flex items-center  justify-start gap-3">
        <input
          className="border-solid font-mono border border-inherit w-[80%] h-7 rounded-lg px-2 text-xs "
          placeholder="e.g add some omelettes"
          type="text"
          name=""
          value={value}
          onChange={handleChange}
        />

        <button
          type="button"
          className="text-slate-400  w-[10%]"
          onClick={handleRemove}
        >
          <IoClose size={18} />
        </button>
      </div>
    </>
  );
}

export default SubtaskInput;