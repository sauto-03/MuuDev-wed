
export function CardEntities({ photo, name }) {
  return (
    <>
      <div className="rounded w-20 h-28 hover:w-32 "  >
        <img src={photo} alt={name} />
        <div className="font-medium dark:text-white  text-center text-2xl  ">
          {name}
        </div>
      </div>
      <br />
    </>

  );
}





/**
 *  <div className="max-w-sm ">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-56 p-4">
          <img src={photo} alt={name} />
        </div>
        <div className="p-4">
          <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
            <b className="txt" id="dato-nombre">{name}</b></p>
        </div>

      </div>

    </div >
 */