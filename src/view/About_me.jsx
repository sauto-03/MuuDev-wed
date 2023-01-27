import { Content } from "../config/Content"
import Espace from "../components/global/Espace"
import Title from "../components/global/Title"
import { Logo } from "../components/About_me/Logo"
import { Description } from "../components/About_me/Description"


export default function About_me() {
  return (
    <div id="About"   >
      <Espace sizeEspace={6} />
      <Title Title={"About"} />
      <Espace sizeEspace={2} />
      <div >
        <Espace sizeEspace={1} />
        <div className="container md:flex justify-end " >
          <Description Description={Content.about_me.description} />
          <Espace sizeEspace={4} />
          <Logo Logo={Content.about_me.logo} />
        </div>
      </div>
    </div>
  )
}