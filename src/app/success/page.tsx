import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import { standardMetadata } from '@/lib/metadata'

export const metadata = {
  ...standardMetadata,
  title: 'Success',
  description: 'Your message has been sent!',
}

export default function Success() {
  return (
    <SimpleLayout title={''} intro={''}>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">🎊Thank you!🎊</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
            Your message has been sent!
          </h1>
          <p className="mt-6 text-base leading-7 ">
            I will get back to you as soon as possible.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Go back home
            </Button>
            <Button href="/contact" className="text-sm font-semibold ">
              Send me another message <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </main>
    </SimpleLayout>
  )
}
