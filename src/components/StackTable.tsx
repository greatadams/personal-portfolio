import { stack } from '../data/stack';

export default function StackTable() {
  return (
    <div>
      <h3>Stack</h3>
      {stack.map((sta) => {
        return (
          <div key={sta.stackCategory}>
            <h4>{sta.stackCategory}</h4>

            <ul>
              {sta.stackItem.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
