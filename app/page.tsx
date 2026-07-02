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
      <section className="mb-8 overflow-hidden rounded-[1.5rem] border border-[#9CC4E4]/70 bg-white shadow-[0_24px_60px_-36px_rgba(27,50,95,0.35)] sm:rounded-[2rem]">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="px-5 py-6 sm:px-10 sm:py-10">
            <span className="eyebrow"><Sparkles size={12} /> Built around your interests</span>
            <h1 className="gradient-heading mt-5 max-w-2xl text-[2.55rem] font-bold leading-[1.02] sm:text-5xl sm:leading-[1.08]">
              Find your people. Share your world.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              InterestHub helps you turn hobbies, projects, ideas, and obsessions into conversations with people who actually care.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-[#E9F2F9]/70 p-2 text-center text-xs font-semibold text-[#1B325F] sm:max-w-xl sm:text-sm">
              <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Post interests</div>
              <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Meet creators</div>
              <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Save ideas</div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          </div>
          <div className="border-t border-[#E9F2F9] bg-[#F8FBFD] p-5 lg:border-l lg:border-t-0">
            <div className="grid gap-3 text-sm lg:h-full lg:content-center">
              <Link href="/explore" className="group rounded-2xl border border-[#D6E8F5] bg-white/85 p-4 text-left transition hover:border-[#9CC4E4] hover:bg-white">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F2F9] text-[#1B325F]">
                  <Flame size={17} />
                  </span>
                  <span className="rounded-full bg-[#E9F2F9] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[#1B325F]">Discover</span>
                </div>
                <p className="text-base font-bold leading-tight text-[#1B325F]">Never run out of things to explore.</p>
                <p className="mt-1.5 text-sm leading-5 text-slate-500">Browse posts by interests, tags, and creators instead of scrolling a random feed.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1B325F]">
                  Explore posts <ArrowRight className="transition group-hover:translate-x-0.5" size={15} />
                </span>
              </Link>
              <Link href="/users" className="group rounded-2xl border border-[#D6E8F5] bg-white/85 p-4 text-left transition hover:border-[#9CC4E4] hover:bg-white">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F2F9] text-[#1B325F]">
                  <UsersRound size={17} />
                  </span>
                  <span className="rounded-full bg-[#E9F2F9] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[#1B325F]">Connect</span>
                </div>
                <p className="text-base font-bold leading-tight text-[#1B325F]">Follow people who share your niche.</p>
                <p className="mt-1.5 text-sm leading-5 text-slate-500">Find makers, learners, hobbyists, and creators around the topics you care about.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1B325F]">
                  Meet creators <ArrowRight className="transition group-hover:translate-x-0.5" size={15} />
                </span>
              </Link>
            </div>
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
