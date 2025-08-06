import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_header">
              <div className="footer_header_left">
                <Link href="/">
                  <Image
                    className="img_fluid"
                    src="/footer-logo.png"
                    width={105}
                    height={16}
                    priority
                    alt="Footer Logo"
                  />
                </Link>
                <ul className="footer_menu">
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/resume">Resume</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
              {/*footer_header_left*/}
              <ul className="footer_header_right">
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              {/*footer_header_right*/}
            </div>
            {/*footer_header*/}
            <div className="footer_copyright">
              Copyright 2024 by Callum Hayes
            </div>
            {/*footer_copyright*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}
    </>
  );
}

export default Footer;
