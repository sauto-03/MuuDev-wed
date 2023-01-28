import CardServices from "./CardServices"


export default function ListServices({ Data = [] }) {
  return (
    <>
      {
        Data.map((i, indice) => {
          return <>
            <CardServices key={indice}
              name={i.name}
              desciption={i.description}
            />
            <br />
          </>
        })
      }
    </>
  )
}
