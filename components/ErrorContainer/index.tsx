import React, { FC, ReactElement, useEffect, useState } from 'react';

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
    <main className="px-4 py-8 md:px-10 flex justify-center flex-col items-center bg-primary flex-grow">
      <h1 className="font-serif text-center mb-8 font-bold sm:text-6xl text-highlight">
        <p className="text-9xl mb-2">{label}</p>
        <div
          style={{ width: '250px', height: '250px' }}
          className="mx-auto mb-2"
          onClick={() => setGif(getRandomGif(gifs))}
        >
          {gif !== '' && <img width="250" height="250" src={gif} alt="" />}
        </div>
        <p className="text-3xl font-sans">{message}</p>
      </h1>
      <div className="flex flex-col text-xl text-center uppercase"></div>
    </main>
  );
};

export default ErrorContainer;
