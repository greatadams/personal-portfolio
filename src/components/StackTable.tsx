import { stack } from '../data/stack';

export default function StackTable() {
  return (
    <section className=" border-b-[1.5px] border-ink py-20 " id="stack">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="font-mono text-xs text-cobalt uppercase tracking-widest mb-3">
            Doc / Bill of materials
          </p>
          <h2 className="font-display font-extrabold text-3xl tracking-tight ">
            Stack
          </h2>
        </div>
        <div className="border-[1.5px] border-ink  bg-paper ">
          {stack.map((sta) => {
            return (
              <div
                key={sta.stackCategory}
                className="grid grid-cols-[200px_1fr]  border-b border-line last:border-b-0"
              >
                <div className="border-r border-line">
                  <h4 className="font-mono text-xs text-cobalt uppercase px-6 py-4">
                    {sta.stackCategory}
                  </h4>
                </div>

                <ul className="list-none flex flex-wrap gap-x-6 gap-y-2  text-sm font-mono px-6 py-4">
                  {sta.stackItem.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
