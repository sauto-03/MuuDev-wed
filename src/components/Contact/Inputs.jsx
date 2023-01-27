export function Input({ type, placeholder, label, setStatus, status }) {
  return (
    <div className="mb-6">

      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <input id={label} type={type} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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

      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {label} <small>(opcional)</small>
      </label>

      <input id={label} type={type} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
      <label className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white">{label}</label>
      <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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