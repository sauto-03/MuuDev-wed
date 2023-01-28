export default function CardServices({ name, desciption }) {
  return (

    <div className="max-w-sm p-6  border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
        {name}
      </h5>
      <p className="mb-3 font-normal text-white  max-w-xs ">
        {desciption}
      </p>

    </div>

  )
}