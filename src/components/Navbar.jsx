import { useState, useEffect } from "react";
import Logo from "../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import "../styles/Navbar.css";
import Button from "../ui/button";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
  document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
}, [showSidebar]);
  return (
    <nav className={`card flex__center navbar ${showSidebar ? 'navbar__active' : ''}`}>
      {showSidebar && (
        <div
          className="aside__overlay"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      )}
      <div
        className="flex__center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Logo />
      </div>
      <aside className={`flex__center sidebar ${showSidebar && "visible"}`}>
        <div className="flex sidebar__top">
          <span
            className="icon__container close__btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar__middle">
          {menu.map((item, index) => (
            <Link
              to={item.link.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              key={index}
              className="tab"
              activeClass="btn__shine"
              onClick={() => setShowSidebar(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="flex__center buttons__wrapper">
        <Button btnText={'Hire me'} isNavBtn={true}/>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
