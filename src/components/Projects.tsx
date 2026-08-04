import { projects } from '../data/project';
import FigureSet from './FigureSet';

export default function Projects() {
  return (
    <section className=" border-b-[1.5px] border-ink py-20 " id="work">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="font-mono text-xs text-cobalt uppercase tracking-widest mb-3">
            Doc / Deployed systems
          </p>
          <h2 className="font-display font-extrabold text-3xl tracking-tight ">
            Built for real clients
          </h2>
        </div>

        {projects.map((project) => {
          return (
            <div
              className="bg-paper grid grid-cols-1 md:grid-cols-[280px_1fr] border-[1.5px] border-ink mb-[-1.5px]
               hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#10141C]  hover:z-10 transition relative"
              key={project.projectTitle}
            >
              <div className="border-b-[1.5px] md:border-b-0md:border-r-[1.5px] border-ink  p-8 flex flex-col  ">
                <h3 className="font-display font-bold text-xl">
                  {project.projectTitle}
                </h3>
                <p className="font-mono text-xs text-cobalt leading-relaxed">
                  {project.projectSubtitle}
                </p>
                <p className="mt-auto font-mono text-xs text-ink-2">
                  {project.projectStatus}
                </p>
              </div>

              <div
                className={`p-8 ${project.projectPreview ? 'grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8' : ''} `}
              >
                <div>
                  <p className="text-ink-2 max-w-[64ch] ">
                    {project.projectParagraph}
                  </p>
                  <div className="flex flex-wrap border border-line mt-5">
                    {project.projectStack.map((list) => {
                      return (
                        <span
                          className="font-mono text-xs px-3 py-1 border-r border-line text-ink-2 last:border-r-0"
                          key={list}
                        >
                          {list}
                        </span>
                      );
                    })}
                  </div>
                  {project.projectLink && (
                    <div className="flex gap-5 mt-5">
                      {project.projectLink.map((link) => {
                        return (
                          <a
                            className="font-mono text-sm text-cobalt border-b-[1.5px] border-cobalt"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                          >
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {project.projectPreview && (
                  <FigureSet
                    images={project.projectPreview}
                    variant={project.previewType}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
