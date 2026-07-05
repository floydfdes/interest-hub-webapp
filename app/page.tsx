'use client';

import { ArrowRight, Flame, PenLine, Search, Sparkles, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import PostList from '@/components/features/PostList';

const categories = ['Design', 'Travel', 'Photography', 'Technology', 'Wellness'];

export default function Home() {
  const user = useCurrentUser();

  return (
    <div className="shell-container">
      <section className="mb-10 py-6 sm:py-10">
        <div className="max-w-5xl">
          <span className="eyebrow"><Sparkles size={12} /> Built around your interests</span>
          <h1 className="gradient-heading mt-5 max-w-4xl text-[2.55rem] font-bold leading-[1.02] sm:text-6xl sm:leading-[1.02]">
            Find your people. Share your world.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-xl sm:leading-9">
            InterestHub helps you turn hobbies, projects, ideas, and obsessions into conversations with people who actually care.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[#0A504A] sm:text-base">
            {['Post interests', 'Meet creators', 'Save ideas'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00AA6B]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {user ? (
              <Link href="/create-post" className="primary-button w-full sm:w-auto">
                <PenLine size={16} />
                Share your first interest
              </Link>
            ) : (
              <Link href="/register" className="primary-button w-full sm:w-auto">
                Start exploring
                <ArrowRight size={16} />
              </Link>
            )}
            <Link href="/explore" className="secondary-button w-full sm:w-auto"><Search size={16} /> Browse interests</Link>
          </div>

          <div className="mt-8 grid gap-5 border-t border-[#A2E6B8]/60 pt-6 sm:grid-cols-2">
            <Link href="/explore" className="group flex items-start gap-4 text-left">
              <Flame className="mt-0.5 shrink-0 text-[#00AA6B]" size={20} />
              <span>
                <span className="block text-base font-bold leading-tight text-[#0A504A]">Never run out of things to explore.</span>
                <span className="mt-1.5 block text-sm leading-6 text-slate-500">Browse posts by interests, tags, and creators instead of scrolling a random feed.</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#00AA6B]">
                  Explore posts <ArrowRight className="transition group-hover:translate-x-0.5" size={15} />
                </span>
              </span>
            </Link>
            <Link href="/users" className="group flex items-start gap-4 text-left">
              <UsersRound className="mt-0.5 shrink-0 text-[#00AA6B]" size={20} />
              <span>
                <span className="block text-base font-bold leading-tight text-[#0A504A]">Follow people who share your niche.</span>
                <span className="mt-1.5 block text-sm leading-6 text-slate-500">Find makers, learners, hobbyists, and creators around the topics you care about.</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#00AA6B]">
                  Meet creators <ArrowRight className="transition group-hover:translate-x-0.5" size={15} />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_18.5rem]">
        <section>
          <div className="mb-5 flex items-end justify-between px-1 sm:px-0">
            <div>
              <span className="eyebrow">Feed</span>
              <h2 className="gradient-heading mt-3 text-2xl font-bold sm:text-3xl">Latest interests</h2>
            </div>
          </div>
          <PostList />
        </section>

        <aside className="surface sticky top-24 hidden p-5 lg:block">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-900">Browse topics</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">Follow what sparks your curiosity.</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <span key={category} className="tag-pill justify-center text-center">{category}</span>
              ))}
            </div>

            <Link href="/explore" className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50">
              Explore all
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
