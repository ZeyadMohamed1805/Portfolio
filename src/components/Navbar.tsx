import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { navLinkType } from "../utils/types";

const Navbar = () => {
  const [ active, setActive ] = useState<string>("");
  const [ toggle, setToggle ] = useState<boolean>(false);

  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  }

  const handleNavLinkClick = (type: string, link: navLinkType) => {
    type === "Mobile" && setToggle(previous => !previous);
    setActive(link.title);
  }

  const handleMenuClick = () => {
    setToggle(previous => !previous);
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Zeyad Mohamed
            <span className="sm:block hidden"> | Frontend Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map(link => (
              <li key={link.id} onClick={() => handleNavLinkClick("Desktop", link)} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" onClick={handleMenuClick} className="w-[28px] h-[28px] object-contain cursor-pointer" />
          <div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {
                navLinks.map(link => (
                  <li key={link.id} onClick={() => handleNavLinkClick("Mobile", link)} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}>
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;