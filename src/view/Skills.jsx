import { ListCard } from "../components/global/ListCard"
import Title from "../components/global/Title"
import Espace from "../components/global/Espace";
import { Skill } from "../config/Entities"


export default function Skills() {
  return (

    <div id="Skills"  >
      <Espace
        sizeEspace={5}
      />
      <Title
        Title={"Skills"}
      />
      <Espace
        sizeEspace={2}
      />
      <h1 className="text-center"  >From-end</h1>
      <br />
      <div className="container md:flex gap-3 " id="center2">
        <ListCard
          Data={Skill.From}
        />
      </div>
      <Espace
        sizeEspace={2}
      />
      <h1 className="text-center"  >Back-end</h1>
      <br />
      <div className="container  md:flex gap-3 " id="center2" >
        <ListCard
          Data={Skill.back}
        />
      </div>

    </div >

  );
}