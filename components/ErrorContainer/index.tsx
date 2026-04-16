'use client';

import { type FC, type ReactElement, useEffect, useState } from 'react';

type Props = {
  gifs: Array<string>;
  label: string;
  message: ReactElement;
};

const getRandomInt = (min: number, max: number) => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min) + _min);
};

const getRandomGif = (gifs: Array<string>) =>
  gifs[getRandomInt(0, gifs.length)];

const ErrorContainer: FC<Props> = ({ gifs, label, message }) => {
  const [gif, setGif] = useState<string>('');
  useEffect(() => {
    setGif(getRandomGif(gifs));
  }, [gifs]);

  return (
    <main className="flex flex-grow flex-col items-center justify-center bg-primary px-4 py-8 md:px-10">
      <h1 className="mb-8 text-center font-bold font-serif text-highlight sm:text-6xl">
        <p className="mb-2 text-9xl">{label}</p>
        <button
          type="button"
          style={{ width: '250px', height: '250px' }}
          className="mx-auto mb-2"
          onClick={() => setGif(getRandomGif(gifs))}
          aria-label="Show another gif"
        >
          {gif !== '' && <img width="250" height="250" src={gif} alt="" />}
        </button>
        <p className="font-sans text-3xl">{message}</p>
      </h1>
      <div className="flex flex-col text-center text-xl uppercase"></div>
    </main>
  );
};

export default ErrorContainer;
