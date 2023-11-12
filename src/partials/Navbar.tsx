import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon={""} name="Garrett Krohn" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/garrettkrohn">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/garrettkrohn/">
          Linkedin
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
