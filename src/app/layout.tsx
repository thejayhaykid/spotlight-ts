import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { standardMetadata } from '@/lib/metadata'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  ...standardMetadata,
  title: {
    template: '%s - Jake Hayes',
    default: 'Jake Hayes - Software engineer, consultant, and technical writer',
  },
  description:
    'Enthusiastic software engineer with a knack for creating captivating websites, dedicated to bringing your digital vision to life. Embracing every challenge, I enjoy learning and exploring new technologies to deliver customized online experiences that leave a lasting impression.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
