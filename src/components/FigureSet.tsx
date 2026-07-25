import { useState } from 'react';

export default function FigureSet({
  images,
  variant,
}: {
  images: string[];
  variant?: 'phone' | 'browser';
}) {
  const [current, setCurrent] = useState(0);
  const frameClass =
    variant === 'phone'
      ? 'aspect-[9/17] max-w-[220px] mx-auto'
      : 'aspect-[16/11]';

  return (
    <div className="mt-6">
      <div
        className={`border-[1.5px] border-ink bg-white overflow-hidden ${frameClass}`}
      >
        <img
          src={images[current]}
          alt="Project screenshot"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex gap-1 justify-center mt-2">
        {images.map((img, i) => {
          return (
            <button
              key={img}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 border ${i === current ? 'bg-cobalt border-cobalt' : 'border-ink-2'}`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
