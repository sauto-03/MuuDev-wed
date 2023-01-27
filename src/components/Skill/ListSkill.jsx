import CardSkill from "./CardSkill"

export default function ListSkill({ name, Items = [] }) {
  return (

    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {name}
        </h5>

      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          {
            Items.map((i, indice) => {
              return <>
                <CardSkill key={indice}
                  name={i.name}
                  photo={i.photo}
                />
                <br />
              </>
            })
          }
        </ul>
      </div>
    </div>

  )
}

/**
 *   
 */