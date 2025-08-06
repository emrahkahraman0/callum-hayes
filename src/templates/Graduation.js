import Image from "next/image";

function Graduation() {
  return (
    <>
      <div id="graduation">
        <div className="graduation">
          <div className="graduation_left">
            <div className="content">
              <h6>My graduation project</h6>
              <p>
                Revolutionizing the educational ecosystem with a mobile app
                designed to enhance interactive learning and peer collaboration.
              </p>
            </div>
          </div>
          {/*graduation_left*/}
          <div className="graduation_right">
            <Image
              className="img_fluid"
              src="/graduation-bg.png"
              width={400}
              height={300}
              priority
              alt="Graduation İmage"
            />
          </div>
        </div>
        {/*graduation*/}
      </div>
      {/*graduation#*/}
    </>
  );
}

export default Graduation;
