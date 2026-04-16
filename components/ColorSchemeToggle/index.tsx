import { type FC, useEffect, useState } from 'react';

const colorSchemes = [
  // { name: 'Scheme 3', class: 'color-scheme-3', color: '#f26419' },
  { name: 'Scheme 1', class: 'color-scheme-2', color: 'rgb(36, 65, 63)' },
  { name: 'Scheme 2', class: 'color-scheme-1', color: 'rgb(211, 118, 98)' },
  { name: 'Scheme 2', class: 'color-scheme-4', color: '#4c3a4f' },
  // { name: 'Scheme 4', class: 'color-scheme-5', color: '#f8c973' },
];

const ColorSchemeToggle: FC = () => {
  const [currentScheme, setCurrentScheme] = useState<number>(0);
  const [isExpanded, toggleIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const currentClass = colorSchemes[currentScheme].class;
    const otherColorSchemes = colorSchemes
      .filter((_, i) => i !== currentScheme)
      .map((c) => c.class);

    document.body.classList.remove(...otherColorSchemes);
    document.body.classList.add(currentClass);
  }, [currentScheme]);

  return (
    <div className="fixed right-5 bottom-5">
      <div className="pb-3">
        {isExpanded && (
          <button
            type="button"
            className="fixed top-0 right-0 bottom-0 left-0 -z-10 bg-black opacity-75"
            onClick={() => toggleIsExpanded(!isExpanded)}
            aria-label="Close color scheme picker"
          />
        )}
        {isExpanded &&
          colorSchemes.map((c, i) => (
            <button
              type="button"
              key={c.name + c.class}
              className="flex items-center"
              onClick={() => {
                setCurrentScheme(i);
                toggleIsExpanded(!isExpanded);
              }}
            >
              <span className="mr-3 text-highlight text-xl">{c.name}</span>
              <div
                className="mb-2 h-16 w-16 rounded-full border-4"
                style={{ backgroundColor: c.color }}
              />
            </button>
          ))}
      </div>
      <button
        type="button"
        className="z-10 ml-auto h-16 w-16 rounded-full border-4 shadow-md"
        style={{ backgroundColor: colorSchemes[currentScheme].color }}
        onClick={() => toggleIsExpanded(!isExpanded)}
        aria-label="Toggle color scheme picker"
      />
    </div>
  );
};

export default ColorSchemeToggle;
