import { DiscussionEmbed } from 'disqus-react'
import { type ArticleWithSlug } from '@/lib/articles'

interface DisqusCommentsProps {
  post: ArticleWithSlug
}

const DisqusComments = ({ post }: DisqusCommentsProps) => {
  const disqusShortname = 'jakehayes-1'

  const disqusConfig = {
    // Get window location
    url:
      typeof window !== 'undefined'
        ? window.location.href
        : `https://www.jakehayes.net/articles/${post.slug}`,
    identifier: btoa(post.title), // Single post id
    title: post.title, // Single post title
    language: 'en_US',
  }

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  )
}

export default DisqusComments
