import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/me.png'

const description =
  'I’m Jake Hayes. I live in Columbus, Ohio, where I design, build, and think about software.'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: description,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {description}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello there! I&apos;m Jake Hayes, a lead software engineer with
              nearly 7 years of experience in the industry. From an early age,
              I&apos;ve had a natural affinity for computers and technology,
              which fueled my passion for problem-solving.
            </p>
            <p>
              As a full stack developer, my expertise lies in React and frontend
              development. I&apos;ve had the opportunity to lead total app
              rewrites, transforming outdated systems into modern React
              frontends, combined with various backend technologies.
              Additionally, I&apos;ve gained valuable experience through my
              consulting work.
            </p>
            <p>
              At my previous company, I was honored with the title of “frontend
              champion” within my team. This recognition acknowledged my deep
              knowledge and expertise in frontend development.
            </p>
            <p>
              What truly motivates me is the never-ending learning journey. I
              embrace the concept of being a “T-shaped” developer, continuously
              expanding my skills across different areas of software
              engineering.
            </p>
            <p>
              Beyond my professional life, I find immense joy in my family.
              I&apos;ve been happily married for over 8 years and have two
              wonderful little girls who inspire me every day.
            </p>
            <p>
              Software development isn&apos;t just my job; it&apos;s my
              professional hobby. However, when I&apos;m not immersed in code,
              you&apos;ll likely find me on the golf course, indulging in my
              love for the sport.
            </p>
            <p>
              Interestingly, I initially pursued a major in Geographic
              Information Science, which granted me a unique perspective. I also
              studied design, granting me insights into the collaborative
              processes with UX designers.
            </p>
            <p>
              I’m excited to connect, collaborate, and contribute to the
              ever-evolving world of software development. Let&apos;s build
              innovative solutions together!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/thejayhaykid"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/jakejhayes"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jake@jakehayes.net"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jake@jakehayes.net
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
