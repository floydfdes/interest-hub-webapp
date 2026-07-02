import Link from 'next/link';
import { ArrowRight, Bell, Bookmark, Compass, Flag, LockKeyhole, MessageCircle, PenLine, Search, ShieldCheck, UsersRound } from 'lucide-react';

const productPillars = [
  {
    title: 'Share what you are into',
    description: 'Create posts around hobbies, projects, opinions, collections, discoveries, and ideas that deserve more than a quick like.',
    icon: PenLine,
  },
  {
    title: 'Discover by interest',
    description: 'Explore posts, people, tags, trending topics, recommendations, and recently viewed content through the things you actually care about.',
    icon: Compass,
  },
  {
    title: 'Find your people',
    description: 'Follow creators, see mutual connections, browse profiles, and build a personal feed around communities that feel relevant to you.',
    icon: UsersRound,
  },
  {
    title: 'Keep ideas organized',
    description: 'Save posts, create collections, revisit recently viewed posts, and keep drafts or archived posts under your control.',
    icon: Bookmark,
  },
];

const featureGroups = [
  {
    title: 'For discovery',
    items: ['Public feed', 'Following feed', 'Recommended posts', 'Trending posts', 'Global search', 'Tag discovery', 'Suggested people'],
  },
  {
    title: 'For expression',
    items: ['Post creation', 'Draft posts', 'Image uploads', 'Mentions', 'Hashtags', 'Visibility controls', 'Comments and replies'],
  },
  {
    title: 'For control',
    items: ['Private profiles', 'Follow requests', 'Block users', 'Mute users', 'Hide posts', 'Archive posts', 'Saved collections'],
  },
  {
    title: 'For safety',
    items: ['Reporting', 'Moderation review', 'Bad-language review', 'Notification preferences', 'Account deactivation', 'Admin moderation tools'],
  },
];

const safetyItems = [
  'Users can report posts, comments, and profiles for review.',
  'Content may be flagged for moderation review and hidden from normal feeds until checked.',
  'Users can block, mute, hide, archive, save, and control visibility of their own experience.',
  'Admins have tools to review reports, hide or remove harmful content, and suspend users when needed.',
  'Negative actions such as block, mute, hide, and report are intentionally placed in menus so they are available without dominating the interface.',
];

export default function About() {
  return (
    <div className="shell-container max-w-5xl">
      <section className="surface overflow-hidden">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <span className="eyebrow">About InterestHub</span>
            <h1 className="gradient-heading mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              A social space built around interests, not noise.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              InterestHub helps people share what they are exploring, discover posts and creators around specific interests, and build conversations that feel intentional. It is designed for web and mobile, so the same account, content, privacy choices, and safety controls travel with you across screen sizes.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore" className="primary-button">
                Explore interests <ArrowRight size={16} />
              </Link>
              <Link href="/users" className="secondary-button">
                Meet creators
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#D6E8F5] bg-[#F8FBFD] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1B325F]">What it helps you do</p>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p className="flex gap-3"><Search className="mt-0.5 shrink-0 text-[#1B325F]" size={18} /> Search across people, posts, and tags.</p>
              <p className="flex gap-3"><MessageCircle className="mt-0.5 shrink-0 text-[#1B325F]" size={18} /> Discuss interests through comments and replies.</p>
              <p className="flex gap-3"><Bell className="mt-0.5 shrink-0 text-[#1B325F]" size={18} /> Get updates about meaningful activity.</p>
              <p className="flex gap-3"><LockKeyhole className="mt-0.5 shrink-0 text-[#1B325F]" size={18} /> Control your visibility and interactions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productPillars.map(({ title, description, icon: Icon }) => (
          <article key={title} className="surface p-5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E9F2F9] text-[#1B325F]">
              <Icon size={19} />
            </span>
            <h2 className="mt-5 text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
          </article>
        ))}
      </section>

      <section className="surface mt-8 p-7 sm:p-8">
        <span className="eyebrow">Features</span>
        <h2 className="gradient-heading mt-4 text-3xl font-bold">What InterestHub includes</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {featureGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-[#D6E8F5] bg-white p-5">
              <h3 className="font-bold text-[#1B325F]">{group.title}</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
                {group.items.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <article className="surface p-7 sm:p-8">
          <span className="eyebrow"><ShieldCheck size={12} /> Safety</span>
          <h2 className="gradient-heading mt-4 text-3xl font-bold">A healthier social layer</h2>
          <p className="mt-4 leading-7 text-slate-500">
            InterestHub is built with moderation, personal boundaries, and user control in mind. Social products need more than posting and following. They need tools that let people participate without feeling trapped, overwhelmed, or exposed.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            {safetyItems.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </article>

        <article className="surface p-7 sm:p-8">
          <span className="eyebrow"><Flag size={12} /> Web and mobile</span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">One experience across devices</h2>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            The same InterestHub experience applies whether you use the website on desktop, a mobile browser, tablet, or installable web-app style experience where available. Pages, menus, forms, privacy settings, notifications, and moderation flows are designed to work across screen sizes.
          </p>
        </article>
      </section>

      <section className="surface mt-8 p-7 text-sm leading-6 text-slate-500 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Important note</h2>
        <p className="mt-3">
          InterestHub is evolving. Feature availability may vary as the product improves. Legal, privacy, and safety pages should be reviewed by qualified counsel before a public launch or commercial rollout.
        </p>
      </section>
    </div>
  );
}
