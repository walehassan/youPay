import { Search, BellRing, Menu } from 'lucide-react';
import Logo from "../Logo";
import "./Navbar.css";
import profile from '../../assets/profile.jpg';

const Navbar = ({onMenuClick}) => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="search-bar">
        <input type="text" disabled={false} placeholder="Search Here" />
        <div className="icon-wrapper">
          <Search/>
        </div>
      </div>
      <div className="user">
        <div className="icon-wrapper">
          <BellRing/>
        </div>
        <div className="profile">
          <img src={profile} alt="profile image" />
        </div>
        <div className="rounded-icon-btn menu-btn" onClick={onMenuClick}>
          <Menu/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;