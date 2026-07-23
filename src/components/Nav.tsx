export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-[1.5px] border-ink backdrop-blur-sm bg-paper/90">
      <div className=" max-w-5xl mx-auto px-6 flex justify-between items-center h-[58px] font-mono text-sm">
        <a href="#top">
          GREAT ADAMU <span className="text-cobalt font-mono">/ SDE </span>
        </a>
        <ul className="flex text-ink-2 gap-6 text-xs  list-none ">
          <li>
            <a className="hover:text-cobalt transition" href="#work">
              WORK
            </a>
          </li>
          <li>
            <a className="hover:text-cobalt transition" href="#stack">
              STACK
            </a>
          </li>
          <li>
            <a className="hover:text-cobalt transition" href="#experience">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a className="hover:text-cobalt transition" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
