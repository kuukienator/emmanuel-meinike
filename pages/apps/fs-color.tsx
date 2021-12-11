import React, { ReactElement, useEffect, useState } from 'react';
import clsx from 'clsx';

import Color from '../../lib/color';
import ColorPickerIcon from '../../assets/svgs/source_icons_color-picker.svg';

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const FSColor = () => {
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
          const color = Color.random();
          setColor(color);
          setCurrentInput(color.toHex());
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
        className={clsx('flex flex-col justify-center items-center', {
          hidden: isUIHidden,
        })}
      >
        <div
          className="flex flex-row justify-center items-center mb-8 border-8 rounded-2xl p-4"
          style={{
            borderColor: color.isDark()
              ? color.lighten(15).toHSLA()
              : color.darken(15).toHSLA(),
          }}
        >
          <input
            className="text-3xl w-56 md:text-6xl md:w-96 text-center font-bold bg-inherit"
            onFocus={() => toggleIsInputFocused(true)}
            onBlur={() => toggleIsInputFocused(false)}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <label className="cursor-pointer">
            <ColorPickerIcon className="text-3xl md:text-6xl" />
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

        <p>
          Press <span className="font-bold">R</span> for random.
        </p>
        <p>
          Press <span className="font-bold">F</span> for fullscreen.
        </p>
        <p>
          Press <span className="font-bold">H</span> to hide UI.
        </p>
      </div>
    </div>
  );
};

FSColor.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default FSColor;
