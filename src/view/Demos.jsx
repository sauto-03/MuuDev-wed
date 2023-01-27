import ListDemos from "../components/Demos/ListDemos";
import Espace from "../components/global/Espace"
import List from "../components/global/List";
import Title from "../components/global/Title"

export default function Demos() {
  return (
    <div id="Demos">
      <Espace
        sizeEspace={10}
      />
      <Title
        Title={"Demos"}
      />
      <Espace
        sizeEspace={2}
      />
      <List >
        <ListDemos></ListDemos>
      </List>
    </div>
  );
}