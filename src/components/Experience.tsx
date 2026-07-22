import { experiences } from '../data/experience';
export default function Experiences() {
  return (
    <>
      <h3>Experience</h3>
      {experiences.map((exp) => {
        return (
          <div key={exp.experienceType}>
            {exp.experienceType}
            {exp.experienceTitle}
            {exp.experienceSubtitle}
            {exp.experienceParagraph}
          </div>
        );
      })}
    </>
  );
}
