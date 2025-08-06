import Link from "next/link";
import React from "react";

function İnfo() {
  return (
    <>
      <div id="info">
        <div className="container">
          <div className="info">
            <h6>Interested in connecting?</h6>
            <p>Lets talk projects, collaborations, or anything design!</p>
            <button>
              <Link href="tel:+6494461709">Book a call</Link>
            </button>
          </div>
          {/*info*/}
        </div>
        {/*container*/}
      </div>
      {/*info#*/}
    </>
  );
}

export default İnfo;
