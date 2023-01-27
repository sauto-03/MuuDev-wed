import { NavLogo, NavItems, NavBar } from "../components/global/NavBar";

export default function Header() {
  return (
    <>
      <NavBar
        Logo={
          <NavLogo
            Logo={"MuuDev"}
            icon={"./logo.png"}
          />
        }
      >

        <NavItems
          Name={"Home"}
        />
        <NavItems
          Name={"About"}
        />
        <NavItems
          Name={"Skills"}
        />
        <NavItems
          Name={"Services"}
        />
        <NavItems
          Name={"Demos"}
        />
        <NavItems
          Name={"Contact"}
        />
      </NavBar>
    </>
  )
}