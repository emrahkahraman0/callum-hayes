import Link from "next/link";
import React from "react";

function ResumeAbout() {
  return (
    <>
      <div id="resume_about">
        <div className="container">
          <div className="resume_about">
            <h6>Graduation Behind. Dedication Ahead.</h6>
            <p>
              Designing a mobile app to connect food enthusiasts through shared
              dining experiences, from concept to prototypFresh out of
              university with a zeal for UX/UI design, I'm keen to use my skills
              to craft engaging mobile app interfaces. I seek a role that
              challenges me and lets me contribute to exciting projects,
              nurturing my growth in design.e.
            </p>
            <button>
              <Link href="/cv.pdf">Download CV</Link>
            </button>
          </div>
          {/*resume_about*/}
        </div>
        {/*container*/}
      </div>
      {/*resume_about#*/}
    </>
  );
}

export default ResumeAbout;
