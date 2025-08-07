"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  var settings = {
    arrows: false,
    dots: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div id="feedback">
        <div className="container">
          <div className="feedback">
            <div className="feedback_heading">
              <h6>Expert feedback</h6>
              <p>
                Read insights and praises from mentors and peers who have guided
                and witnessed my professional growth.
              </p>
            </div>
            <div className="feedback_gallery">
              <Slider {...settings}>
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
                <div className="feedback_gallery_item">
                  <Image
                    className="img_fluid"
                    src="/feedback-image.png"
                    width={84}
                    height={84}
                    priority
                    alt="Feedback İmage"
                  />
                  <h5>Dr. James Anderson</h5>
                  <h6>Director of the College of Art and Design</h6>
                  <p>
                    "As the director of the college, I have witnessed Callum's
                    remarkable growth as a designer. He has a keen eye for
                    detail and a commendable dedication to his craft, which has
                    set a high standard for his peers. Callum's work is a
                    testament to his potential in the design industry."
                  </p>
                </div>
                {/*feedback_gallery_item*/}
              </Slider>
            </div>
            {/*feedback_gallery*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
