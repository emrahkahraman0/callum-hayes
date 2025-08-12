import Image from "next/image";

function AboutWho() {
  return (
    <>
      <div id="about_who">
        <div className="container">
          <h6>Who I am beyond Design</h6>
          <div className="about_who row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="about_who_image">
              <Image
                className="img_fluid"
                src="/about-who-image.png"
                width={475}
                height={329}
                priority
                alt="About İmage"
              />
            </div>
            {/*about_who_image*/}
            <div className="about_who_text">
              <h5>
                More than a UX/UI designer, I'm a storyteller at heart, weaving
                narratives through my designs.
              </h5>
              <p>
                My philosophy? Every app tells a story, and every interface is a
                journey. I find joy in simple things — a well-crafted espresso,
                the crisp pages of a new book, and the quiet buzz of a city at
                dawn.
              </p>
            </div>
            {/*about_who_text*/}
          </div>
          {/*about_who*/}
        </div>
        {/*container*/}
      </div>
      {/*about_who#*/}
    </>
  );
}

export default AboutWho;
