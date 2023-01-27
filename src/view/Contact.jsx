import Title from "../components/global/Title"
import Espace from "../components/global/Espace"
import Form from "../components/Contact/Form";
import { Content } from "../config/Content"
import { MuuDevRouter } from "../config/Urls";


export default function Contact() {
  return (
    <div id="Contact"  >
      <Espace
        sizeEspace={6}
      />
      <Title
        Title={"Contact"}
      />
      <br />
      <div className="container" id="center2" >
        <Form
          Router={MuuDevRouter.customers.url}
        >
          <p className="text-start text-xl max-w-prose text-gray-800" >
            {Content.contact.message}
          </p>
        </Form>
      </div>

    </div>
  );
}