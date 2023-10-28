'use client'; // Error components must be Client Components

import ErrorContainer from '../components/ErrorContainer';
import Link from '../components/Link';

const GIFS = ['https://media.giphy.com/media/xUPGcLyG1vxvvkE2U8/giphy.gif'];

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <ErrorContainer
        gifs={GIFS}
        label="500"
        message={
          <>
            Something went really wrong, maybe you should go{' '}
            <Link url="/" label="Home" />.
          </>
        }
      />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
