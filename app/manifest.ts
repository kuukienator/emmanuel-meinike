import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: 'rgb(36, 65, 63)',
    display: 'standalone',
    theme_color: 'rgb(36, 65, 63)',
    short_name: 'Ema',
    name: 'Ema - Emmanuel Meinike',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    start_url: '/',
  };
}
