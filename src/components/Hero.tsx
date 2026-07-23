export default function Hero() {
  return (
    <header className="border-ink py-20 ">
      <div className=" max-w-5xl mx-auto px-6 border-[1.5px] border-ink bg-paper p-14 space-y-5">
        <h3 className="font-mono text-sm text-cobalt">
          Software Developer — Distributed Backends · Web & Mobile Frontends
        </h3>
        <h1 className="text-4xl font-display font-extrabold leading-tight tracking-tight max-w-[17ch]">
          I build production systems that{' '}
          <span className="text-cobalt">real businesses </span> run on.
        </h1>
        <p className="text-xs font-mono text-cobalt">
          |-------| MEASURED IN PRODUCTION
        </p>
        <p className="text-ink-2">
          Java and Spring Boot services with Kafka and gRPC on the back; React
          web apps and React Native mobile apps on the front. I've built a
          dispatch platform for Brandon's cab companies and an equipment-safety
          system for an aviation services firm — real clients, real
          requirements, end to end.
        </p>

        <ul className="flex gap-3  border-ink list-none bg-paper">
          <li>
            <a
              href="#work"
              className="bg-cobalt text-white border-cobalt inline-flex items-center  border-[1.5px] font-mono text-sm px-6 py-3 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              View system
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

        <div className="grid grid-cols-4 font-mono border-t-[1.5px] border-line ">
          <div className="border-r border-line px-4 py-3">
            <p className="text-sm  text-ink-2">DRAWN BY</p>
            <p>G. ADAMU</p>
          </div>
          <div className="border-r border-line  px-4 py-3">
            <p className="text-sm  text-ink-2">LOCATION</p>
            <p>MANITOBA</p>
          </div>
          <div className="border-r border-line  px-4 py-3">
            <p className="text-sm  text-ink-2">EDUCATION</p>
            <p>B.SC CS - BRANDON U</p>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm  text-ink-2">STATUS</p>
            <p className="text-cobalt">OPEN TO WORK</p>
          </div>
        </div>
      </div>
    </header>
  );
}
