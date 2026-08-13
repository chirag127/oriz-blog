export const FAMILY = {
  brand: 'oriz',
  rootOrigin: 'https://oriz.in',
  authDomain: 'auth.oriz.in',
  firebaseProjectId: 'oriz-app',
  operator: {
    name: 'Chirag Singhal',
    email: 'whyiswhen@gmail.com',
    address: 'Bhubaneswar, Odisha, India 751001',
    githubHandle: 'chirag127',
  },
  jurisdiction: { country: 'India', state: 'Odisha', city: 'Bhubaneswar' },
  legalUpdated: '2026-06-19',
} as const

export interface FamilySite {
  slug: string
  name: string
  url: string
  tagline: string
  category: 'reading' | 'tools' | 'finance' | 'personal' | 'blog'
}

export const FAMILY_SITES: FamilySite[] = [
  {
    slug: 'home',
    name: 'oriz',
    url: 'https://oriz.in',
    tagline: 'The hub for the oriz family',
    category: 'personal',
  },
  {
    slug: 'me',
    name: 'Me',
    url: 'https://me.oriz.in',
    tagline: 'Chirag Singhal profile',
    category: 'personal',
  },
  {
    slug: 'blog',
    name: 'Blog',
    url: 'https://blog.oriz.in',
    tagline: 'Long-form writing',
    category: 'reading',
  },
  {
    slug: 'books',
    name: 'Books',
    url: 'https://books.oriz.in',
    tagline: 'NCERT textbook directory',
    category: 'reading',
  },
  {
    slug: 'book-lore',
    name: 'Book Lore',
    url: 'https://book-lore.oriz.in',
    tagline: 'Structured book commentary',
    category: 'reading',
  },
  {
    slug: 'journal',
    name: 'Journal',
    url: 'https://journal.oriz.in',
    tagline: 'Privacy-first PWA journal',
    category: 'personal',
  },
]

/**
 * The oriz blog network — 26 subject-focused category blogs, each at
 * https://<slug>-blog.oriz.in. This hub (blog.oriz.in) is the directory that
 * links to every one. Consumed by the home-page blog directory section.
 */
export const BLOG_SITES: FamilySite[] = [
  { slug: 'finance-blog', name: 'Finance', url: 'https://finance-blog.oriz.in', tagline: 'Money, investing & tax', category: 'blog' },
  { slug: 'tech-blog', name: 'Tech', url: 'https://tech-blog.oriz.in', tagline: 'Web dev & software', category: 'blog' },
  { slug: 'devtools-blog', name: 'DevTools', url: 'https://devtools-blog.oriz.in', tagline: 'Dev infra & tooling', category: 'blog' },
  { slug: 'career-blog', name: 'Career', url: 'https://career-blog.oriz.in', tagline: 'Tech career roadmaps', category: 'blog' },
  { slug: 'ai-blog', name: 'AI', url: 'https://ai-blog.oriz.in', tagline: 'AI, ML & LLMs', category: 'blog' },
  { slug: 'health-blog', name: 'Health', url: 'https://health-blog.oriz.in', tagline: 'Health & fitness', category: 'blog' },
  { slug: 'lifestyle-blog', name: 'Lifestyle', url: 'https://lifestyle-blog.oriz.in', tagline: 'Everyday living', category: 'blog' },
  { slug: 'entertainment-blog', name: 'Entertainment', url: 'https://entertainment-blog.oriz.in', tagline: 'Film, TV & music', category: 'blog' },
  { slug: 'business-blog', name: 'Business', url: 'https://business-blog.oriz.in', tagline: 'Startups & strategy', category: 'blog' },
  { slug: 'marketing-blog', name: 'Marketing', url: 'https://marketing-blog.oriz.in', tagline: 'Growth & brand', category: 'blog' },
  { slug: 'self-dev-blog', name: 'Self Dev', url: 'https://self-dev-blog.oriz.in', tagline: 'Habits & growth', category: 'blog' },
  { slug: 'remote-work-blog', name: 'Remote Work', url: 'https://remote-work-blog.oriz.in', tagline: 'Working from anywhere', category: 'blog' },
  { slug: 'education-blog', name: 'Education', url: 'https://education-blog.oriz.in', tagline: 'Learning & study', category: 'blog' },
  { slug: 'food-blog', name: 'Food', url: 'https://food-blog.oriz.in', tagline: 'Recipes & cooking', category: 'blog' },
  { slug: 'travel-blog', name: 'Travel', url: 'https://travel-blog.oriz.in', tagline: 'Trips & destinations', category: 'blog' },
  { slug: 'news-blog', name: 'News', url: 'https://news-blog.oriz.in', tagline: 'Current affairs', category: 'blog' },
  { slug: 'gaming-blog', name: 'Gaming', url: 'https://gaming-blog.oriz.in', tagline: 'Games & esports', category: 'blog' },
  { slug: 'pets-blog', name: 'Pets', url: 'https://pets-blog.oriz.in', tagline: 'Pet care & animals', category: 'blog' },
  { slug: 'sports-blog', name: 'Sports', url: 'https://sports-blog.oriz.in', tagline: 'Games & athletes', category: 'blog' },
  { slug: 'beauty-blog', name: 'Beauty', url: 'https://beauty-blog.oriz.in', tagline: 'Skincare & makeup', category: 'blog' },
  { slug: 'hobbies-blog', name: 'Hobbies', url: 'https://hobbies-blog.oriz.in', tagline: 'Crafts & pastimes', category: 'blog' },
  { slug: 'home-diy-blog', name: 'Home & DIY', url: 'https://home-diy-blog.oriz.in', tagline: 'Home projects & repair', category: 'blog' },
  { slug: 'relationships-blog', name: 'Relationships', url: 'https://relationships-blog.oriz.in', tagline: 'People & connection', category: 'blog' },
  { slug: 'sustainability-blog', name: 'Sustainability', url: 'https://sustainability-blog.oriz.in', tagline: 'Green living', category: 'blog' },
  { slug: 'arts-blog', name: 'Arts', url: 'https://arts-blog.oriz.in', tagline: 'Art & creativity', category: 'blog' },
  { slug: 'parenting-blog', name: 'Parenting', url: 'https://parenting-blog.oriz.in', tagline: 'Raising kids', category: 'blog' },
]
