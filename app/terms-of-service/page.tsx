const terms = [
  {
    title: '1. Acceptance of these terms',
    body: [
      'By using InterestHub, you agree to these Terms of Service and any policies referenced by them, including the Privacy Policy and any community or moderation rules shown in the app.',
      'If you do not agree, you should not use InterestHub. These terms apply to the website, mobile web experience, and any installable web-app style version where available.',
    ],
  },
  {
    title: '2. What InterestHub is',
    body: [
      'InterestHub is a social discovery platform for sharing posts, images, interests, tags, comments, replies, saved collections, profiles, and interactions around topics users care about.',
      'The service may include feeds, search, recommendations, suggested users, notifications, drafts, archives, bookmarks, collections, private profiles, follow requests, sharing, reporting, moderation, and admin tools.',
    ],
  },
  {
    title: '3. Accounts and eligibility',
    body: [
      'You are responsible for the information you provide when creating an account and for keeping your login credentials secure.',
      'You must not create accounts using false, misleading, unauthorized, automated, or abusive methods.',
      'You are responsible for all activity that happens under your account unless the activity was caused by a security issue outside your control.',
      'InterestHub may support account deactivation, reactivation, password reset, and account deletion features. Availability may depend on current product support.',
    ],
  },
  {
    title: '4. User content',
    body: [
      'You may create posts, upload images, write comments and replies, use tags and hashtags, mention other users, save drafts, archive posts, and share supported content.',
      'You keep ownership of content you create, but you grant InterestHub permission to host, store, display, process, moderate, distribute, and make that content available as needed to operate the service.',
      'You are responsible for making sure you have the rights to the content you post, including images, text, names, usernames, tags, and any other materials.',
      'You should not post private, confidential, copyrighted, harmful, misleading, or unlawful content unless you have the right and authority to do so.',
    ],
  },
  {
    title: '5. Content visibility and privacy controls',
    body: [
      'Post and profile visibility controls help determine who can see your content, but no online system can guarantee that content will never be copied, screenshotted, shared, cached, or seen by unintended people.',
      'Public posts may be visible in feeds, search, tags, recommendations, profile pages, shares, or other discovery surfaces.',
      'Followers-only posts are intended for approved followers and the author. Private posts are intended for the author. Archived posts, drafts, and moderation-hidden posts are not intended for normal public feeds.',
      'Private profiles, follow requests, block, mute, hide, archive, save, and notification preferences are user controls. They may affect what you or others can see and do across supported flows.',
    ],
  },
  {
    title: '6. Community rules',
    body: [
      'You agree not to use InterestHub to harass, threaten, abuse, impersonate, exploit, spam, scam, or harm other people.',
      'You must not post content that promotes hate, violence, sexual exploitation, illegal activity, self-harm encouragement, targeted harassment, malware, deceptive behavior, or serious misinformation.',
      'You must not attempt to bypass blocks, mutes, suspensions, privacy settings, rate limits, moderation controls, authentication, or admin restrictions.',
      'You must not scrape, overload, reverse engineer, attack, interfere with, or automate InterestHub in a way that harms the service, users, infrastructure, or product integrity.',
    ],
  },
  {
    title: '7. Reporting and moderation',
    body: [
      'Users may report posts, comments, and profiles. Reports may be reviewed by admins or moderation systems.',
      'InterestHub may use automated checks to flag content for language or safety review. Flagged content may be hidden from normal public views while under review.',
      'InterestHub may remove content, hide content, restrict visibility, suspend users, block access, dismiss reports, or take other moderation actions where appropriate.',
      'Moderation decisions may not always be perfect. InterestHub may change, reverse, or update moderation decisions as more context becomes available.',
    ],
  },
  {
    title: '8. Notifications and communications',
    body: [
      'InterestHub may show in-app notifications for likes, follows, follow requests, comments, replies, mentions, shares, reports, moderation updates, and account activity.',
      'You may be able to manage categories of notifications through settings. Some service, security, or moderation notices may still be shown if needed to operate or protect the service.',
      'Email communications may be used for account recovery, password reset, verification, security, moderation, or product updates where supported.',
    ],
  },
  {
    title: '9. Saved content, drafts, archives, and history',
    body: [
      'Saved posts and collections help you organize content for later. Removing a saved post or collection may not remove the original post from InterestHub.',
      'Drafts are private working copies until published. Draft publishing may require required fields and may trigger moderation checks.',
      'Archived posts are intended to be hidden from normal feeds while remaining available to the owner where supported.',
      'Recently viewed posts and activity history may be used to help you revisit content and understand your account activity.',
    ],
  },
  {
    title: '10. Admin and platform safety tools',
    body: [
      'Admin users may access moderation, reports, user management, post management, activity logs, and safety tools for platform operation and protection.',
      'Admin access must be used responsibly and only for legitimate platform management, safety, support, testing, or operational purposes.',
      'Abuse of admin tools may result in account restriction, removal of access, or other action.',
    ],
  },
  {
    title: '11. Availability and changes',
    body: [
      'InterestHub is evolving and may change over time. Features may be added, changed, limited, removed, or temporarily unavailable.',
      'We may update feeds, recommendations, search, moderation systems, profile features, notifications, mobile layouts, or admin tools as the product improves.',
      'We do not guarantee that every feature will always be available, error-free, uninterrupted, or compatible with every device, browser, network, or screen size.',
    ],
  },
  {
    title: '12. Third-party services and links',
    body: [
      'InterestHub may link to third-party websites or use third-party providers for hosting, images, email, analytics, monitoring, or infrastructure.',
      'Third-party services are governed by their own terms and policies. InterestHub is not responsible for third-party content, websites, services, or actions.',
    ],
  },
  {
    title: '13. Disclaimers',
    body: [
      'InterestHub is provided as is and as available. We do not guarantee that the service will meet every expectation, be uninterrupted, be secure at all times, or be free from bugs or harmful content.',
      'User-generated content belongs to users and may not represent the views of InterestHub.',
      'Recommendations, trending content, suggested users, tags, and search results are discovery tools, not endorsements or guarantees of quality, accuracy, safety, or suitability.',
    ],
  },
  {
    title: '14. Limitation of liability',
    body: [
      'To the fullest extent permitted by applicable law, InterestHub and its operators are not liable for indirect, incidental, special, consequential, punitive, or exemplary damages arising from your use of the service.',
      'This includes loss of data, content, reputation, opportunity, profits, goodwill, or access, except where liability cannot be limited under applicable law.',
    ],
  },
  {
    title: '15. Suspension, deactivation, and termination',
    body: [
      'We may suspend, restrict, deactivate, or terminate accounts that violate these terms, harm users, abuse the platform, evade moderation, or create legal, security, or operational risk.',
      'Users may be able to deactivate or delete their own account where supported. Some records may be retained where necessary for security, moderation, audit, backup, legal, or abuse-prevention reasons.',
    ],
  },
  {
    title: '16. Changes to these terms',
    body: [
      'We may update these Terms of Service as InterestHub changes. Continued use of the service after updates means you accept the updated terms, where permitted by law.',
      'Material changes should be communicated in a reasonable way through the product, website, or other available channel.',
    ],
  },
];

const prohibitedExamples = [
  'Harassment, threats, bullying, or targeted abuse.',
  'Hate speech, violent threats, or encouragement of harm.',
  'Spam, scams, phishing, fake engagement, or deceptive automation.',
  'Impersonation or misleading accounts.',
  'Posting private information without permission.',
  'Uploading content you do not have rights to use.',
  'Trying to access accounts, admin tools, APIs, or data without authorization.',
  'Evading blocks, mutes, suspensions, rate limits, or moderation actions.',
];

export default function TermsOfService() {
  return (
    <div className="shell-container max-w-4xl">
      <section className="surface p-7 sm:p-10">
        <span className="eyebrow">Terms</span>
        <h1 className="gradient-heading mt-5 text-4xl font-bold leading-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Last updated: July 1, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          These terms explain the rules for using InterestHub across the website and mobile web experience. They are written to cover the core product features, social interactions, safety controls, and moderation systems currently planned or available.
        </p>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
          This page is a detailed product draft, not legal advice. It should be reviewed by qualified counsel before launch or commercial use.
        </div>
      </section>

      <section className="surface mt-6 p-6 sm:p-7">
        <h2 className="text-xl font-bold text-slate-900">Quick summary</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-2xl bg-[#E9F2F9] p-4 text-sm leading-6 text-[#1B325F]">Use InterestHub to share and discover interests respectfully.</p>
          <p className="rounded-2xl bg-[#E9F2F9] p-4 text-sm leading-6 text-[#1B325F]">You are responsible for your account and the content you post.</p>
          <p className="rounded-2xl bg-[#E9F2F9] p-4 text-sm leading-6 text-[#1B325F]">Privacy, block, mute, hide, archive, and notification settings help control your experience.</p>
          <p className="rounded-2xl bg-[#E9F2F9] p-4 text-sm leading-6 text-[#1B325F]">Reports and moderation tools exist to protect the community.</p>
        </div>
      </section>

      <div className="mt-6 space-y-5">
        {terms.map((section) => (
          <section key={section.title} className="surface p-6 sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </div>

      <section className="surface mt-6 p-6 sm:p-7">
        <h2 className="text-xl font-bold text-slate-900">Examples of prohibited behavior</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          {prohibitedExamples.map((item) => <li key={item}>- {item}</li>)}
        </ul>
      </section>

      <section className="surface mt-6 p-6 text-sm leading-6 text-slate-500 sm:p-7">
        <h2 className="text-xl font-bold text-slate-900">Questions or disputes</h2>
        <p className="mt-3">
          A support or contact channel should be added before launch so users can ask questions about these terms, report legal or safety concerns, request account help, or contact the platform operator.
        </p>
      </section>
    </div>
  );
}
