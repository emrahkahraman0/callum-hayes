"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <>
      <div id="hero">
        <div className="container">
          <div className="hero">
            <div className="hero_content">
              <Image
                className="img_fluid"
                src="/hero-image.png"
                width={100}
                height={100}
                priority
                alt="Hero İmage"
              />
              <h6>
                I'm Callum Hayes, a UX/UI designer specialising in creating
                sleek, user-friendly mobile apps.
              </h6>
              <ul className="social">
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
              {/*social*/}
            </div>
            {/*hero_content*/}
            <div className="hero_gallery">
              <Slider {...settings}>
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-1.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-2.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-1.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-2.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-1.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-2.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
                <div className="hero_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/gallery-1.png"
                    width={400}
                    height={300}
                    priority
                    alt="Gallery İmage"
                  />
                </div>
                {/*hero_gallery_item*/}
              </Slider>
            </div>
            {/*hero_gallery*/}
          </div>
          {/*hero*/}
        </div>
        {/*container*/}
      </div>
      {/*hero#*/}
    </>
  );
}

export default Hero;
