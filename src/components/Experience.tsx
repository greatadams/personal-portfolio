import { experiences } from '../data/experience';
export default function Experiences() {
  return (
    <section className=" border-b-[1.5px] border-ink py-20 " id="experience">
      <div className="max-w-5xl mx-auto px-6 ">
        <div className="mb-10">
          <p className="font-mono text-xs text-cobalt uppercase tracking-widest mb-3">
            Doc / Record
          </p>
          <h2 className="font-display font-extrabold text-3xl tracking-tight ">
            Experience
          </h2>
        </div>

        {experiences.map((exp) => {
          return (
            <div
              key={exp.experienceType}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-6 text-sm border-b border-line last:border-b-0"
            >
              <p className="font-mono text-ink-2">{exp.experienceType}</p>

              <div className="">
                <h4 className="font-display font-bold text-lg">
                  {exp.experienceTitle}
                </h4>
                <p className="font-mono text-xs text-cobalt">
                  {exp.experienceSubtitle}
                </p>
                <p className="text-ink-2 mt-2 max-w-[64ch]">
                  {exp.experienceParagraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
