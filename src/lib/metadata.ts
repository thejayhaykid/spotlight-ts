import { Metadata } from 'next'

export const standardMetadata: Metadata = {
  authors: [{ name: 'Jake Hayes', url: 'https://jakehayes.net' }],
  creator: 'Jake Hayes',
  description:
    'I’m Jake Hayes. I live in Columbus, Ohio, where I design, build, and think about software.',
  keywords: ['Jake Hayes', 'software', 'design', 'Columbus', 'Ohio'],
  publisher: 'Jake Hayes',
  title: `Jake Hayes's Blog`,
  openGraph: {
    description:
      'I’m Jake Hayes. I live in Columbus, Ohio, where I design, build, and think about software.',
    images: [
      {
        url: 'https://jakehayes.net/images/me.png',
        width: 400,
        height: 400,
        alt: 'Jake Hayes',
      },
    ],
    title: `Jake Hayes's Blog`,
    type: 'website',
    url: 'https://jakehayes.net',
  },
}
