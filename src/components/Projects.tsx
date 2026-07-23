import { projects } from '../data/project';

export default function Projects() {
  return (
    <div>
      <p>Doc / Deployed systems</p>
      <h2>Built for real clients</h2>
      <div>
        {projects.map((project) => {
          return (
            <div key={project.projectTitle}>
              <span>{project.projectTitle}</span>
              <span>{project.projectSubtitle}</span>
              <span>{project.projectStatus}</span>
              <span>{project.projectParagraph}</span>
              {project.projectStack.map((list) => {
                return <span key={list}>{list}</span>;
              })}
              {project.projectLink && (
                <span>
                  {project.projectLink.map((link) => {
                    return (
                      <a href={link.url} key={link.url}>
                        {link.label}
                      </a>
                    );
                  })}
                </span>
              )}
              {project.projectPreview && (
                <span>
                  {project.projectPreview.map((img) => {
                    return (
                      <img
                        src={img}
                        key={img}
                        alt="description per slide preview"
                      />
                    );
                  })}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
