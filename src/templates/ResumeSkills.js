"use client";

function ResumeSkills({ skills }) {
  return (
    <>
      <div id="resume_skills">
        <div className="container">
          <div className="resume_skills">
            {skills.map((skill) => (
              <div key={skill.id} className="resume_skills_item">
                <h6>{skill.title}</h6>
                <p>{skill.description}</p>
                <ul>
                  {skill.ul.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/*resume_skills_item*/}
          </div>
          {/*resume_skills*/}
        </div>
        {/*resume_container*/}
      </div>
      {/*resume_skills#*/}
    </>
  );
}

export default ResumeSkills;
