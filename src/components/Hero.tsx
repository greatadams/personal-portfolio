export default function Hero() {
  return (
    <header className="border-ink py-20  border-b-[1.5px] rise d1">
      <div className=" max-w-5xl mx-auto px-6 border-[1.5px] border-ink bg-paper p-6 md:p-14 space-y-5">
        <h3 className="font-mono text-sm text-cobalt rise d1">
          Software Developer — Distributed Backends · Web & Mobile Frontends
        </h3>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight tracking-tight max-w-[17ch] rise d2">
          I build production systems that{' '}
          <span className="text-cobalt">real businesses </span> run on.
        </h1>
        <div className="flex items-center gap-3 max-w-[340px] rise d3 slide-in">
          <div className="flex items-center flex-1">
            <div className="w-[1.5px] h-3 bg-cobalt"></div>
            <div className="h-[1.5px] bg-cobalt flex-1"></div>
            <div className="w-[1.5px] h-3 bg-cobalt"></div>
          </div>
          <span className="font-mono text-[0.66rem] tracking-wider text-cobalt whitespace-nowrap ">
            MEASURED IN PRODUCTION
          </span>
        </div>
        <p className="text-ink-2 rise d4">
          Java and Spring Boot services with Kafka and gRPC on the back; React
          web apps and React Native mobile apps on the front. I've built a
          dispatch platform for Brandon's cab companies and an equipment-safety
          system for an aviation services firm — real clients, real
          requirements, end to end.
        </p>

        <ul className="flex flex-wrap gap-3  border-ink list-none bg-paper rise d5">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-[1.5px] font-mono text-sm border-ink px-6 py-3 hover:bg-cobalt/10 hover:text-cobalt hover:border-cobalt hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/great-adamu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-[1.5px] font-mono text-sm border-ink px-6 py-3 hover:bg-cobalt/10 hover:text-cobalt hover:border-cobalt hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#10141C] transition active:translate-x-0 active:translate-y-0 active:shadow-none "
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 font-mono border-t-[1.5px] border-line  rise d6">
          <div className="border-[0.5px] border-line px-4 py-3">
            <p className="text-sm  text-ink-2">DRAWN BY</p>
            <p>G. ADAMU</p>
          </div>
          <div className="border-[0.5px] border-line  px-4 py-3">
            <p className="text-sm  text-ink-2">LOCATION</p>
            <p>MANITOBA</p>
          </div>
          <div className="border-[0.5px] border-line  px-4 py-3">
            <p className="text-sm  text-ink-2">EDUCATION</p>
            <p>B.SC CS - BRANDON U</p>
          </div>
          <div className=" border-[0.5px] border-line px-4 py-3">
            <p className="text-sm  text-ink-2">STATUS</p>
            <p className="text-cobalt">OPEN TO WORK</p>
          </div>
        </div>
      </div>
    </header>
  );
}
