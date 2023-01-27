import Header from "./view/Header";
import Home from "./view/Home";
import Demos from "./view/Demos";
import Contact from "./view/Contact";
import About_me from "./view/About_me"
import Skills from "./view/Skills"
import Services from "./view/Services"
import Footer from "./view/Footer";


export default function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <About_me></About_me>
      <Skills></Skills>
      <Services></Services>
      <Demos></Demos>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
