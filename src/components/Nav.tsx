import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="sticky top-0 z-50 border-b-[1.5px] border-ink backdrop-blur-sm bg-paper/90">
      <div className=" max-w-5xl mx-auto px-6 flex justify-between items-center h-[58px] font-mono text-sm">
        <a href="#top">
          GREAT ADAMU <span className="text-cobalt font-mono">/ SDE </span>
        </a>

        <ul className=" text-ink-2 gap-6 text-xs  list-none hidden md:flex ">
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

        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-paper border-b-[1.5px] border-ink">
          <ul className="flex flex-col gap-4 p-6 font-mono text-xs text-ink-2">
            <li>
              <a
                className="hover:text-cobalt transition"
                href="#work"
                onClick={() => setOpen(false)}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                className="hover:text-cobalt transition"
                href="#stack"
                onClick={() => setOpen(false)}
              >
                STACK
              </a>
            </li>
            <li>
              <a
                className="hover:text-cobalt transition"
                href="#experience"
                onClick={() => setOpen(false)}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                className="hover:text-cobalt transition"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
