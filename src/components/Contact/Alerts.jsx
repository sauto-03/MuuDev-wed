export function AlertExit({ message }) {
  return (
    <div className="p-4 mb-4 text-2xl   text-green-800 rounded-l bg-gray-800 dark:text-green-400" role="alert">
      <span className="font-medium ">{message}</span>
    </div>
  )
}

export function AlertError({ message }) {
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg  bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{message}</span>
    </div>
  )
}

