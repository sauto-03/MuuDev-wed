import Espace from "../components/global/Espace"

export default function Footer() {
  return (
    <>
      <Espace
        sizeEspace={5}
      ></Espace>
      <footer className="p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0">
            <img src={"./logo.png"} className="h-8 mr-3" alt={"Logo"} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MuuDev</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-50  sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#About" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#Contact" className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
            <li>
              <a href="#Skills" className="mr-4 hover:underline md:mr-6 ">Skills</a>
            </li>
            <li>
              <a href="#Services" className="hover:underline">services</a>
            </li>
          </ul>
        </div>
      </footer>
    </>

  )
}