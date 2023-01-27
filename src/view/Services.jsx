import Title from "../components/global/Title"
import Espace from "../components/global/Espace"
import { ListCard } from "../components/global/ListCard"
import { Service } from "../config/Entities"
import List from "../components/global/List"

export default function Services() {
  return (
    <div id="Services" >
      <Espace
        sizeEspace={10}
      ></Espace>

      <Title
        Title={"Services"}
      />

      <Espace
        sizeEspace={2}
      ></Espace>


      <List>
        <ListCard
          Data={Service}
        />
      </List>

    </div>
  )
}