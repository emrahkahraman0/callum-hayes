import İnfo from "@/templates/İnfo";
import ResumeAbout from "@/templates/ResumeAbout";
import skills from "@/templates/Skills";
import ResumeSkills from "@/templates/ResumeSkills";

function Resume() {
  return (
    <>
      <ResumeAbout />
      <ResumeSkills skills={skills} />
      <İnfo />
    </>
  );
}

export default Resume;
