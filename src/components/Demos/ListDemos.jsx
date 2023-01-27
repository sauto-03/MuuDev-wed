import { Demos } from "../../config/Demos"
import CardDemo from "./CardDemo"

export default function ListDemos() {

  return (
    <>
      {
        Demos.map((i, index) => {
          return <CardDemo
            key={index}
            description={i.description}
            name={i.name}
            photo={i.photo}
            url={i.url}
          >
          </CardDemo>
        })
      }
    </>
  )
}