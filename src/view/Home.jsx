import { Content } from "../config/Content"
import Espace from "../components/global/Espace";

import Hello from "../components/Home/Hello";
import { SocialMedia, SocialMediaItems } from "../components/Home/SocialMedia";

export default function Home() {
  return (
    <div id="Home" className="container ">

      <Espace
        sizeEspace={5} />

      <Hello Content={Content} />

      <SocialMedia>
        <SocialMediaItems
          content={Content.home.socialMedia.facebbok}
        />
        <SocialMediaItems
          content={Content.home.socialMedia.instagram}
        />

      </SocialMedia>

    </div >
  );
}


