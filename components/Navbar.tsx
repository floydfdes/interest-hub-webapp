'use client';

import { getUnreadNotificationCount } from '@/app/api/api';
import { notifyAuthChanged, useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useAdminAccess } from '@/app/hooks/useAdminAccess';
import { setTheme, useTheme } from '@/app/hooks/useTheme';
import BrandMark from '@/components/BrandMark';
import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Bell, Bookmark, ChevronDown, Compass, LogIn, LogOut, Menu, Moon, PenLine, Search, Shield, Sun, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
    { href: '/', label: 'Feed', icon: Compass, authOnly: false },
    { href: '/search', label: 'Search', icon: Search, authOnly: false },
    { href: '/explore', label: 'Explore', icon: Compass, authOnly: false },
    { href: '/users', label: 'People', icon: UserRound, authOnly: false },
    { href: '/saved', label: 'Saved', icon: Bookmark, authOnly: true },
];

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const user = useCurrentUser();
    const { isAdmin } = useAdminAccess();
    const theme = useTheme();
    const [unreadNotifications, setUnreadNotifications] = useState(0);
    const visibleNavItems = navItems.filter((item) => !item.authOnly || user);


    useEffect(() => {
        let cancelled = false;

        const loadUnreadCount = async () => {
            if (!user) {
                setUnreadNotifications(0);
                return;
            }

            try {
                const response = await getUnreadNotificationCount();
                if (!cancelled) setUnreadNotifications(response.count);
            } catch {
                if (!cancelled) setUnreadNotifications(0);
            }
        };

        void loadUnreadCount();
        window.addEventListener('notifications:changed', loadUnreadCount);

        return () => {
            cancelled = true;
            window.removeEventListener('notifications:changed', loadUnreadCount);
        };
    }, [pathname, user]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        notifyAuthChanged();
        router.push('/login');
    };

    const userMenu = [
        ...(isAdmin ? [{
            key: 'admin',
            label: <Link href="/admin">Administration</Link>,
            icon: <Shield size={15} />,
        }] : []),
        {
            key: 'profile',
            label: <Link href="/profile">View profile</Link>,
            icon: <UserRound size={15} />,
        },
        {
            key: 'logout',
            label: 'Log out',
            icon: <LogOut size={15} />,
            onClick: handleLogout,
        },
    ];

    const mobileNavMenu: MenuProps['items'] = [
        ...visibleNavItems.map(({ href, label, icon: Icon }) => ({
        key: href,
        label: <Link href={href}>{label}</Link>,
        icon: <Icon size={15} />,
        })),
        ...(user ? [
            { type: 'divider' as const },
            {
                key: 'create-post',
                label: <Link href="/create-post">Create post</Link>,
                icon: <PenLine size={15} />,
            },
        ] : [
            { type: 'divider' as const },
            {
                key: 'login',
                label: <Link href="/login">Log in</Link>,
                icon: <LogIn size={15} />,
            },
        ]),
        {
            key: 'toggle-theme',
            label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
            icon: theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />,
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        },
    ];

    return (
        <header className="sticky top-0 z-40 border-b border-[#cfe8d8]/80 bg-[#F7F7F2]/82 backdrop-blur-xl">
            <div className="shell-container flex h-[4.5rem] items-center justify-between gap-4 px-4 sm:px-6">
                <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="InterestHub home">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-[#A2E6B8]/45 ring-1 ring-[#A2E6B8]/80">
                        <BrandMark size={38} />
                    </span>
                    <div className="hidden xl:block">
                        <p className="text-[1.05rem] font-bold leading-none tracking-tight text-slate-900">InterestHub</p>
                        <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-400">Discover more</p>
                    </div>
                </Link>

                <nav className="hidden min-w-0 items-center gap-1 rounded-2xl border border-[#cfe8d8]/85 bg-white/70 p-1 md:flex">
                    {visibleNavItems.map(({ href, label, icon: Icon }) => {
                        const selected = pathname === href || (href !== '/' && pathname.startsWith(href));
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition sm:px-4 ${selected
                                        ? 'bg-[#F7F7F2] text-[#0A504A] shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                <Icon size={16} />
                                <span className="hidden md:block">{label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex shrink-0 items-center gap-2">
                    <button
                        type="button"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="theme-toggle !hidden sm:!inline-flex"
                    >
                        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                    </button>
                    {user ? (
                        <>
                            <Link href="/create-post" className="primary-button !hidden sm:!inline-flex">
                                <PenLine size={15} />
                                Post
                            </Link>
                            <Link
                                href="/notifications"
                                aria-label={unreadNotifications > 0 ? `${unreadNotifications} unread notifications` : 'Notifications'}
                                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#cfe8d8] bg-white text-slate-600 transition hover:border-[#A2E6B8] hover:text-[#0A504A]"
                            >
                                <Bell size={18} />
                                {unreadNotifications > 0 && (
                                    <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-[#00AA6B] px-1.5 py-0.5 text-center text-[0.68rem] font-bold leading-none text-white">
                                        {unreadNotifications > 99 ? '99+' : unreadNotifications}
                                    </span>
                                )}
                            </Link>
                            <Dropdown menu={{ items: userMenu }} placement="bottomRight" trigger={['click']}>
                                <button className="flex items-center gap-2 rounded-xl border border-[#cfe8d8] bg-white p-1.5 pr-2 text-sm font-medium text-slate-700 transition hover:border-[#A2E6B8]">
                                    <Avatar src={user.profilePic || null} size={32}>{user.name.charAt(0)}</Avatar>
                                    <span className="hidden lg:inline">{user.name}</span>
                                    <ChevronDown className="hidden text-slate-400 lg:block" size={14} />
                                </button>
                            </Dropdown>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="secondary-button !hidden sm:!inline-flex">
                                <LogIn size={15} />
                                Log in
                            </Link>
                            <Link href="/register" className="primary-button">
                                Get started
                            </Link>
                        </>
                    )}
                    <Dropdown menu={{ items: mobileNavMenu }} placement="bottomRight" trigger={['click']}>
                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#cfe8d8] bg-white text-slate-600 transition hover:border-[#A2E6B8] hover:text-[#0A504A] md:hidden"
                        >
                            <Menu size={18} />
                        </button>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
