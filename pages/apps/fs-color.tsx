import React, { ReactElement, useEffect, useState } from 'react';
import clsx from 'clsx';

import Color from '../../lib/color';

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
  const [color, setColor] = useState<Color>(Color.random());
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
        if (e.key === 'r') {
          setColor(Color.random());
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
        <p
          className="text-6xl border-8 p-4 rounded-2xl mb-8 w-96 text-center font-bold"
          style={{
            borderColor: color.isDark()
              ? color.lighten(15).toHSLA()
              : color.darken(15).toHSLA(),
          }}
        >
          {color.toHex()}
        </p>
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
