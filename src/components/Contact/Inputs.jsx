export function Input({ type, placeholder, label, setStatus, status }) {
  return (
    <div className="mb-6">

      <label className="block mb-2 text-xl font-medium text-white">
        {label}
      </label>

      <input id={label} type={type} className="
      shadow-sm 
      text-sm 
      rounded-lg 
      w-full p-2.5 
      bg-gray-700 
      border-gray-600 
      placeholder-gray-400 
      text-white 
      focus:ring-blue-500 
      focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        value={status}
        required
      />
    </div>
  )
}

export function InputNumber({ type, placeholder, label, setStatus, status }) {
  return (
    <div className="mb-6">

      <label className="block mb-2 text-xl font-medium text-white">
        {label} <small>(opcional)</small>
      </label>

      <input id={label} type={type} className="
      shadow-sm 
      text-sm 
      rounded-lg 
      w-full p-2.5 
      bg-gray-700 
      border-gray-600 
      placeholder-gray-400 
      text-white 
      focus:ring-blue-500 
      focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        value={status}
        min={10}
        maxLength={10}
      />
    </div>
  )
}

export function TextArea({ placeholder, label, setStatus, status }) {
  return (
    <>
      <label className="block mb-2 text-xl  font-medium text-white">{label}</label>
      <textarea id="message" rows="8" className="block
      shadow-sm 
      text-sm 
      rounded-lg 
      w-full p-2.5 
      bg-gray-700 
      border-gray-600 
      placeholder-gray-400 
      text-white 
      focus:ring-blue-500 
      focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        onChange={(e) => {
          setStatus(e.target.value)
        }}
        value={status}
        required
      ></textarea>
    </>
  )
}