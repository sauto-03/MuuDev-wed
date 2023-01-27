export default function CardSkill({ photo, name }) {
  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="w-8 h-8 rounded-full" src={photo} alt={name} />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            email@windster.com
          </p>
        </div>
      </div>
    </li>
  )
}