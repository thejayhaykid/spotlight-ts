import Image, { type ImageProps } from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

import JH from '@/images/JH.png'
import github from '@/images/logos/github.png'
import letterboxd from '@/images/logos/letterboxd-logo.png'
import progressgif from '@/images/logos/progressgif.png'
import redbubble from '@/images/logos/redbubble.png'
import stashtag from '@/images/logos/stashtag.app.png'
import gumroad from '@/images/logos/gumroad.png'
import buymeacoffee from '@/images/logos/buy-me-a-coffee.png'

interface Link {
  primaryHeader: string
  secondaryHeader: string
  imageUrl: string
  linkUrl: string
  sideText1?: string
  sideText2?: string
}

// General website, twitter (x?), stashtag.app, letterboxd, redbubble, gumroad, amazon (once I have things to sell on there)
const generalLinks: Link[] = [
  {
    primaryHeader: 'My website',
    secondaryHeader: 'Homepage of this site!',
    imageUrl: JH.src,
    linkUrl: '/',
    sideText2: 'NextJS + Tailwind',
  },
  {
    primaryHeader: 'Letterboxd',
    secondaryHeader: 'One of the few social media sites I use',
    imageUrl: letterboxd.src,
    linkUrl: 'https://letterboxd.com/jakehayes/',
  },
]

const portfolioLinks: Link[] = [
  {
    primaryHeader: 'GitHub',
    secondaryHeader: 'Where I store (most of) my code',
    imageUrl: github.src,
    linkUrl: 'https://github.com/thejayhaykid/',
  },
  {
    primaryHeader: 'Stashtag',
    secondaryHeader: "Random little client only utilities I've built",
    imageUrl: stashtag.src,
    linkUrl: 'https://www.stashtag.app',
    sideText2: 'React + CharkraUI',
  },
  {
    primaryHeader: 'ProgressGif',
    secondaryHeader: "Contributed to this app that is in Apple's App Store",
    imageUrl: progressgif.src,
    linkUrl: 'https://aheze.github.io/ProgressGif/',
    sideText2: 'Swift + UIKit',
  },
  {
    primaryHeader: 'Paypr',
    secondaryHeader:
      'Python utility to turn any image into a 16:9 ratio wallpaper',
    imageUrl: github.src,
    linkUrl: 'https://github.com/thejayhaykid/paypr',
    sideText2: 'Python',
  },
]

const sellingLinks: Link[] = [
  {
    primaryHeader: 'Redbubble',
    secondaryHeader: "Stickers and other things I've designed",
    imageUrl: redbubble.src,
    linkUrl: 'https://thejayhaykid.redbubble.com',
  },
  {
    primaryHeader: 'Gumroad',
    secondaryHeader:
      'Digital assets, currently only Notion templates, more to come',
    imageUrl: gumroad.src,
    linkUrl: 'https://jakejhayes.gumroad.com/',
  },
  {
    primaryHeader: 'Buy Me A Coffee',
    secondaryHeader:
      'Nothing to buy, but if you like what I do, you can support me here',
    imageUrl: buymeacoffee.src,
    linkUrl: 'https://www.buymeacoffee.com/jakehayes',
  },
]

interface LinkGroupProps {
  links: Link[]
}

function LinkGroup({ links }: Readonly<LinkGroupProps>) {
  return (
    <ul className="w-screen divide-y overflow-hidden border shadow md:w-[500px] md:rounded-xl">
      {links.map((link: Link) => (
        <li
          key={link.linkUrl}
          className="relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <Image
              className="h-12 w-12 flex-none rounded-full object-scale-down"
              src={link.imageUrl}
              alt=""
              height={48}
              width={48}
              unoptimized
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6">
                <a href={link.linkUrl}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {link.primaryHeader}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5">
                {link.secondaryHeader}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 ">{link.sideText1 ?? ''}</p>
              <p className="mt-1 text-xs leading-5 ">{link.sideText2 ?? ''}</p>
            </div>
            <svg
              className="h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </li>
      ))}
    </ul>
  )
}
export const metadata = {
  title: 'Links',
  description: 'Various Links to my social media and other things',
}

export default function Links() {
  return (
    <SimpleLayout
      title="Links"
      intro="Various Links to my social media and other things"
    >
      <div className="flex w-full flex-col items-center overflow-y-auto">
        <div>
          <h2 className="pb-2 pl-6 text-2xl font-bold md:pl-0">
            General Links
          </h2>
          <h6 className="pb-2 pl-6 text-sm md:pl-0">
            <em>These are links to my profiles on other websites</em>
          </h6>
          <LinkGroup links={generalLinks} />
        </div>
        <div className="my-8">
          <h2 className="pb-2 pl-6 text-2xl  font-bold md:pl-0">
            Things I&apos;ve made
          </h2>
          <h6 className="pb-2  pl-6 text-sm md:pl-0">
            <em>Hopefully this list continues growing</em>
          </h6>
          <LinkGroup links={portfolioLinks} />
        </div>
        <div className="my-8">
          <h2 className="pb-2 pl-6 text-2xl  font-bold md:pl-0">
            Buy some stuff
          </h2>
          <h6 className="pb-2  pl-6 text-sm md:pl-0">
            <em>Or not, but here are some options</em>
          </h6>
          <LinkGroup links={sellingLinks} />
        </div>
      </div>
    </SimpleLayout>
  )
}
