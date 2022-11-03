import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-menu-container">
        <div className="brand-container">
          <h1 className="brand-main">Design</h1>
          <div className="brand-submain">Agency</div>
        </div>
        <ul className="menu">
          <li>Specialize in</li>
          <li>Case Study</li>
          <li>Process</li>
          <li>Industries</li>
        </ul>
      </div>
      <div className="menu menu-action">
        <button className="btn schedule-a-call">Schedule A Call</button>
        <button className="btn">We are Hiring</button>
      </div>
      <GiHamburgerMenu className="hamburger-menu" />
    </div>
  );
};

export default Navbar;
