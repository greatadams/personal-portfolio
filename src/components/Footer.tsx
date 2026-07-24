export default function Footer() {
  return (
    <footer className=" py-20">
      <div className="max-w-5xl mx-auto px-6 ">
        <div>
          <p className="font-mono text-xs text-cobalt uppercase tracking-widest mb-3">
            Doc / Contact
          </p>
        </div>
        <h2 className="text-4xl font-display font-extrabold leading-tight tracking-tight max-w-[18ch]">
          If your team ships real software for real users, let's talk.
        </h2>
        <p className="text-ink-2 mt-2 max-w-[64ch]">
          Open to software developer roles in Manitoba and across Canada.
        </p>

        <ul className="flex gap-3 mt-8 list-none ">
          <li>
            <a
              href="mailto:adamsgreat15@gmail.com"
              className="bg-cobalt text-white border-cobalt inline-flex items-center border-[1.5px] font-mono text-sm px-6 py-3 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              adamsgreat15@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/greatadams"
              className="inline-flex items-center border-[1.5px] font-mono text-sm border-ink px-6 py-3 hover:bg-cobalt/10 hover:text-cobalt hover:border-cobalt hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/great-adamu"
              className="inline-flex items-center border-[1.5px] font-mono text-sm border-ink px-6 py-3 hover:bg-cobalt/10 hover:text-cobalt hover:border-cobalt hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none "
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="flex justify-between border-t border-line pt-5 mt-16 ">
          <p className="text-ink-2 text-sm font-mono"> © 2026 GREAT ADAMU</p>
          <p className="text-ink-2 text-sm font-mono">REV 2.1 - SHEET 1 OF 1</p>
        </div>
      </div>
    </footer>
  );
}
