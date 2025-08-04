"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
  // Menü
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active
  const currentRoute = usePathname();

  return (
    <>
      <div id="header" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  src="/header-logo.png"
                  width={105}
                  height={16}
                  priority
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/* header_logo */}

            <ul ref={menuRef} className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link
                  className={currentRoute === "/" ? "active" : ""}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/about" ? "active" : ""}
                  href="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/resume" ? "active" : ""}
                  href="/resume"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/projects" ? "active" : ""}
                  href="/projects"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/blog" ? "active" : ""}
                  href="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/contact" ? "active" : ""}
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <button>
                <a href="#">Book a call</a>
              </button>
            </ul>
            {/* header_menu */}

            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars icon bars"></i>
              <i className="fa-solid fa-xmark icon times"></i>
            </div>
            {/* header_hamburger */}
          </div>
          {/* header */}
        </div>
        {/* container */}
      </div>
      {/* header# */}
    </>
  );
}

export default Header;
