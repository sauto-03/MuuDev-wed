import Title from "../components/global/Title"
import Espace from "../components/global/Espace"
import { Service } from "../config/Entities"
import List from "../components/global/List"
import ListServices from "../components/Services/ListServices"

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
        <ListServices
          Data={Service}
        />
      </List>

    </div>
  )
}