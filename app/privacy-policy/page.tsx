const sections = [
  {
    title: '1. Scope of this policy',
    body: [
      'This Privacy Policy explains how InterestHub handles information when you use our website, mobile web experience, account features, social features, discovery tools, notifications, moderation flows, and admin safety systems.',
      'The same policy applies whether you access InterestHub from a desktop browser, mobile browser, tablet, or installable web-app style experience where available.',
    ],
  },
  {
    title: '2. Information you provide',
    body: [
      'Account information such as name, username, email address, password, profile picture, bio, interests, role, privacy setting, and account status.',
      'Profile and social information such as followers, following, follow requests, blocked users, muted users, hidden posts, saved posts, collections, archived posts, drafts, and recently viewed posts.',
      'Content you create such as posts, titles, images, categories, tags, hashtags, comments, replies, reports, report details, share messages, and metadata attached to content moderation.',
      'Settings and preferences such as notification preferences, private account choice, visibility choices, saved collections, and account deactivation choices.',
    ],
  },
  {
    title: '3. Information collected automatically',
    body: [
      'Technical information may include IP address, browser type, device type, operating system, user agent, request timestamps, and security or error logs.',
      'Usage information may include pages visited, posts opened, searches performed, tags viewed, notifications read, and actions such as likes, follows, saves, shares, reports, blocks, mutes, hides, archives, and profile updates.',
      'Some information is stored locally in your browser, such as authentication tokens, cached user information, and theme preference, so the app can keep you logged in and remember your experience.',
    ],
  },
  {
    title: '4. How we use information',
    body: [
      'To create and manage your account, authenticate you, keep sessions active, and support login, logout, password reset, deactivation, and reactivation flows.',
      'To show feeds, profiles, posts, comments, notifications, search results, recommendations, saved collections, drafts, archived posts, hidden posts, and recently viewed posts.',
      'To personalize your experience using interests, follows, saves, muted users, blocked users, hidden posts, tags, and activity patterns.',
      'To provide safety tools, including reporting, moderation review, bad-language review, admin review queues, user suspension, and content removal or hiding where appropriate.',
      'To send or display notifications about likes, follows, comments, replies, mentions, shares, follow requests, and moderation updates, subject to your notification preferences.',
      'To improve product quality, debug errors, monitor performance, prevent abuse, enforce rules, and protect users from spam, harassment, or harmful behavior.',
    ],
  },
  {
    title: '5. Public and private visibility',
    body: [
      'Public posts and public profile information may be visible to other users and visitors depending on the feature and your settings.',
      'Private profiles limit profile details, posts, followers, and following lists to the owner and approved followers where supported.',
      'Post visibility settings may include public, followers-only, and private. Archived posts, drafts, and moderation-hidden posts are not intended to appear in normal public feeds.',
      'Blocking, muting, hiding, and private-profile controls are personal safety and preference tools. These settings affect what you and others can see or do in supported flows.',
    ],
  },
  {
    title: '6. Sharing and notifications',
    body: [
      'You may share posts, profiles, and comments with other users where supported. Sharing respects visibility and blocking rules.',
      'Recipients may receive notifications when content is shared with them. Users may manage notification preferences for categories such as likes, comments, replies, follows, follow requests, mentions, shares, and moderation updates.',
      'The frontend does not create notifications directly. Notification creation is handled by backend systems when supported events occur.',
    ],
  },
  {
    title: '7. Reports, moderation, and admin review',
    body: [
      'When you submit a report, we may store the report reason, optional details, reporter, reported target, timestamps, status, and moderation action.',
      'Content may be automatically flagged for language or safety review. Flagged content may be hidden from normal feeds until reviewed.',
      'Admins may review reports, view relevant reported content, update report status, hide or remove content, and suspend users when necessary to protect the platform.',
      'Admin activity and moderation actions may be logged for accountability, abuse prevention, analytics, and safety review.',
    ],
  },
  {
    title: '8. Cookies, local storage, and similar technologies',
    body: [
      'InterestHub may use browser local storage to keep you signed in, remember your theme preference, cache basic user data, and support app functionality.',
      'If analytics, monitoring, crash reporting, or third-party services are added, this policy should be updated to describe those services and the data they collect.',
      'You can clear browser storage or cookies through your browser settings, but doing so may sign you out or reset app preferences.',
    ],
  },
  {
    title: '9. Third-party services',
    body: [
      'InterestHub may rely on service providers for hosting, image storage, email delivery, analytics, security, monitoring, or database infrastructure.',
      'These providers may process limited information only as needed to provide their services to InterestHub.',
      'If external identity, payment, advertising, analytics, or AI services are added in the future, this policy should be updated before those services are used in production.',
    ],
  },
  {
    title: '10. Data retention',
    body: [
      'We keep account and content information for as long as needed to provide InterestHub, maintain safety, comply with obligations, resolve disputes, and enforce rules.',
      'Deleted, hidden, archived, moderation-hidden, or reported content may be retained for a period where needed for safety, audit, moderation evidence, abuse prevention, backups, or legal reasons.',
      'Deactivated accounts may remain stored so they can be reactivated, unless deletion is requested and supported by the service.',
    ],
  },
  {
    title: '11. Your choices and controls',
    body: [
      'You can edit profile information, update interests, change privacy settings, manage notification preferences, save or unsave posts, create or delete collections, archive or unarchive your posts, and manage draft posts.',
      'You can block users, mute users, hide posts, report content, deactivate your account, and request password reset or account reactivation where supported.',
      'You may request access, correction, deletion, or other privacy-related assistance where applicable. The exact process may depend on your location and the features available at the time of request.',
    ],
  },
  {
    title: '12. Security',
    body: [
      'We use reasonable technical and organizational measures to protect user information, including authentication, protected routes, role-based admin access, and server-side controls.',
      'No online service can guarantee perfect security. You are responsible for keeping your login credentials safe and for logging out on shared devices.',
    ],
  },
  {
    title: '13. Children and age restrictions',
    body: [
      'InterestHub is not intended for children or for users who are not legally allowed to use social platforms in their location.',
      'If a minimum age requirement is added or if children may use the service, this policy and the product flow should be updated before launch to include the required consent and protection mechanisms.',
    ],
  },
  {
    title: '14. International users',
    body: [
      'InterestHub may be accessed from different regions. Privacy rights and obligations may vary by country or state.',
      'Before broad public launch, this policy should be reviewed for the regions where InterestHub will operate, including any applicable requirements for data access, deletion, portability, consent, and user notice.',
    ],
  },
  {
    title: '15. Changes to this policy',
    body: [
      'We may update this Privacy Policy as InterestHub evolves, especially when new features, analytics, integrations, AI tools, mobile capabilities, or third-party services are added.',
      'The updated version should identify the latest effective date and may be communicated through the app where appropriate.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="shell-container max-w-4xl">
      <section className="surface p-7 sm:p-10">
        <span className="eyebrow">Privacy</span>
        <h1 className="gradient-heading mt-5 text-4xl font-bold leading-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Last updated: July 1, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          This policy explains how InterestHub may collect, use, protect, and manage information across the website and mobile web experience. It is written in plain language so users understand how the product works and what choices they have.
        </p>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
          This page is a product-ready draft, not legal advice. It should be reviewed by qualified counsel before production launch, especially if InterestHub will operate across multiple jurisdictions.
        </div>
      </section>

      <div className="mt-6 space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="surface p-6 sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </div>

      <section className="surface mt-6 p-6 text-sm leading-6 text-slate-500 sm:p-7">
        <h2 className="text-xl font-bold text-slate-900">Contact and privacy requests</h2>
        <p className="mt-3">
          If a contact email or support channel is added, users should be able to use it for privacy questions, account access requests, data deletion requests, safety concerns, and policy questions.
        </p>
      </section>
    </div>
  );
}
