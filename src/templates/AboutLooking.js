import Image from "next/image";

function AboutLooking() {
  return (
    <>
      <div id="about_looking">
        <div className="container">
          <div className="about_looking">
            <div className="about_looking_interests">
              <h6>My inspirations and interests</h6>
              <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <p>
                  Inspiration strikes me in the quiet moments — during early
                  morning jogs along the Thames Path, while exploring the latest
                  exhibit at the Tate Modern.
                </p>
                <p>
                  Inspiration strikes me in the quiet moments — during early
                  morning jogs along the Thames Path, while exploring the latest
                  exhibit at the Tate Modern.
                </p>
              </div>
              <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
                <Image
                  className="img_fluid"
                  src="/img-1.png"
                  width={233}
                  height={400}
                  priority
                  alt="About Looking İmage"
                />
                <Image
                  className="img_fluid"
                  src="/img-2.png"
                  width={233}
                  height={400}
                  priority
                  alt="About Looking İmage"
                />
                <Image
                  className="img_fluid"
                  src="/img-3.png"
                  width={233}
                  height={400}
                  priority
                  alt="About Looking İmage"
                />
              </div>
            </div>
            {/*about_looking_interests*/}
            <div className="about_looking_ahead">
              <h6>Looking ahead</h6>
              <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <p>
                  Inspiration strikes me in the quiet moments — during early
                  morning jogs along the Thames Path, while exploring the latest
                  exhibit at the Tate Modern.
                </p>
                <p>
                  Inspiration strikes me in the quiet moments — during early
                  morning jogs along the Thames Path, while exploring the latest
                  exhibit at the Tate Modern.
                </p>
              </div>
            </div>
            {/*about_looking_ahead*/}
          </div>
          {/*about_looking*/}
        </div>
        {/*container*/}
      </div>
      {/*about_looking#*/}
    </>
  );
}

export default AboutLooking;
