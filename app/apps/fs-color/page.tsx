'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Color from '../../../lib/color';

const ColorPickerIcon = ({ className }: { className?: string }) => (
  <svg
    width="1em"
    height="1em"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 13.161L12.4644 7.6966C12.8549 7.30607 13.4881 7.30607 13.8786 7.6966L15.9999 9.81792C16.3904 10.2084 16.3904 10.8416 15.9999 11.2321L14.0711 13.161M7 13.161L4.82764 15.3334C4.73428 15.4267 4.66034 15.5376 4.61007 15.6597L3.58204 18.1563C3.07438 19.3892 4.30728 20.6221 5.54018 20.1145L8.03681 19.0865C8.1589 19.0362 8.26981 18.9622 8.36317 18.8689L14.0711 13.161M7 13.161H14.0711"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.878 3.45401L15.9993 5.57533M20.242 9.81798L18.1206 7.69666M15.9993 5.57533L17.4135 4.16112C17.8041 3.7706 18.4372 3.7706 18.8277 4.16112L19.5349 4.86823C19.9254 5.25875 19.9254 5.89192 19.5349 6.28244L18.1206 7.69666M15.9993 5.57533L18.1206 7.69666"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const FSColorPage = () => {
  const [color, setColor] = useState<Color>(new Color(0, 0, 0));
  const [currentInput, setCurrentInput] = useState<string>(color.toHex());
  const [isInputFoccused, toggleIsInputFocused] = useState<boolean>(false);
  const [isUIHidden, setIsUIHidden] = useState(false);

  useEffect(() => {
    const onFullScreenChange = () => {
      if (document.fullscreenElement) {
        setIsUIHidden(true);
      } else {
        setIsUIHidden(false);
      }
    };
    document.addEventListener('fullscreenchange', onFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
    };
  }, []);

  useEffect(() => {
    try {
      const color = Color.fromHex(currentInput);
      setColor(color);
    } catch (e) {}
  }, [currentInput]);

  const setRandomColor = () => {
    const color = Color.random();
    setColor(color);
    setCurrentInput(color.toHex());
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center flex-col text-2xl"
      style={{
        backgroundColor: color.toHSLA(),
        color: color.isDark()
          ? color.lighten(15).toHSLA()
          : color.darken(15).toHSLA(),
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (isInputFoccused) {
          return;
        }

        if (e.key === 'r') {
          setRandomColor();
        }
        if (e.key === 'f') {
          toggleFullscreen();
        }
        if (e.key === 'h') {
          setIsUIHidden(!isUIHidden);
        }
        if (e.key === 'Escape') {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }}
    >
      <div
        className={clsx('flex flex-col justify-center items-center h-full', {
          hidden: isUIHidden,
        })}
      >
        <div
          className="flex flex-row justify-center items-center mb-8 border-8 rounded-2xl p-2 md:p-4"
          style={{
            borderColor: color.isDark()
              ? color.lighten(15).toHSLA()
              : color.darken(15).toHSLA(),
          }}
        >
          <input
            className="text-4xl w-56 md:text-6xl md:w-96 text-center font-bold bg-inherit"
            onFocus={() => toggleIsInputFocused(true)}
            onBlur={() => toggleIsInputFocused(false)}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <label className="cursor-pointer">
            <ColorPickerIcon className="text-4xl md:text-6xl" />
            <input
              type="color"
              onChange={(e) => {
                const color = Color.fromHex(e.target.value);
                setColor(color);
                setCurrentInput(color.toHex());
              }}
              className="hidden"
            />
          </label>
        </div>

        <div className="space-y-5 flex flex-col justify-center">
          <p>
            Press{' '}
            <button
              className="font-bold py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => setRandomColor()}
              style={{
                color: color.toHSLA(),
                backgroundColor: color.isDark()
                  ? color.lighten(15).toHSLA()
                  : color.darken(15).toHSLA(),
              }}
            >
              R
            </button>{' '}
            for random.
          </p>
          <p>
            Press{' '}
            <button
              className="font-bold py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => toggleFullscreen()}
              style={{
                color: color.toHSLA(),
                backgroundColor: color.isDark()
                  ? color.lighten(15).toHSLA()
                  : color.darken(15).toHSLA(),
              }}
            >
              F
            </button>{' '}
            for fullscreen.
          </p>
          <p>
            Press{' '}
            <button
              className="font-bold py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => setIsUIHidden(!isUIHidden)}
              style={{
                color: color.toHSLA(),
                backgroundColor: color.isDark()
                  ? color.lighten(15).toHSLA()
                  : color.darken(15).toHSLA(),
              }}
            >
              H
            </button>{' '}
            to hide UI.
          </p>
        </div>
      </div>

      <footer
        className={clsx('font-bold text-base flex space-x-2 py-2', {
          hidden: isUIHidden,
        })}
      >
        <a
          href="https://twitter.com/kuukienator"
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer"
        >
          @kuukienator
        </a>
        <span>|</span>
        <a
          href="https://www.ema.codes/"
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer"
        >
          ema.codes
        </a>
        <span>|</span>
        <span>2021</span>
      </footer>
    </div>
  );
};

export default FSColorPage;
