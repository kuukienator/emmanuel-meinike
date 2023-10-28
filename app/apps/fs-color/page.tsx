'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import ColorPickerIcon from '../../../assets/svgs/source_icons_color-picker.svg';
import Color from '../../../lib/color';

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
