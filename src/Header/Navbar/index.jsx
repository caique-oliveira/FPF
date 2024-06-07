import { Link } from 'react-scroll';

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass}
    linkClassName={linkClassName} onClick={undefined} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    {["Cadastro", "Login", "Usuários cadastrados", "Footer"].map((section, id) =>
      <Link
        key={id}
        to={section}
        smooth={true}
        className={linkClassName}
        onClick={onClick}>
        {section}
      </Link>
    )}
  </nav>
)
export default Navbar;