import NavLink from './NavLink';
import Dropdown from './Dropdown';

const NavLinks = ( {onClick} ) => {
    return (
        <ul className="nav-list">
           <NavLink onClick={onClick} to="/faq">Viability</NavLink>
           <Dropdown onClick={onClick}>Blog</Dropdown>
           <NavLink onClick={onClick} to="/blog">Contacts</NavLink>
        </ul>
    )
}

export default NavLinks
