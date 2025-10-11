import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const SectionTitle = ({ tag, title }) => (
  <div className="mb-8">
    {tag && <p className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{tag}</p>}
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
  </div>
);

const Callout = ({ title, subtitle, cta, href = '#' }) => (
  <div className="my-8 p-6 bg-slate-800 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex items-center">
      <ShieldCheck className="w-10 h-10 text-fuchsia-400 mr-4 shrink-0" />
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-slate-400">{subtitle}</p>
      </div>
    </div>
    <a href={href} className="shrink-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700">
      {cta}
    </a>
  </div>
);

const InfoSection = ({ id, title, subtitle, paragraphs }) => {
  return (
    <section id={id} className="py-16">
      <SectionTitle title={title} />
      {subtitle && <p className="text-xl text-slate-300 mb-8">{subtitle}</p>}
      <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
};

export default function PrivacyPage() {
  const navItems = [
    { id: 'introduction', label: "Introduction" },
    { id: 'info_collect', label: "Information Google collects" },
    { id: 'why_collect', label: "Why Google collects data" },
    { id: 'privacy_controls', label: "Your privacy controls" },
    { id: 'sharing_info', label: "Sharing your information" },
    { id: 'keeping_secure', label: "Keeping your information secure" },
    { id: 'export_delete', label: "Exporting & deleting your information" },
    { id: 'retaining_info', label: "Retaining your information" }
  ];

  const introductionProps = {
    title: "Google Privacy Policy",
    p1: "When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
    p2: "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.",
    checkup: {
      title: "Privacy Checkup",
      subtitle: "Looking to change your privacy settings?",
      cta: "Take the Privacy Checkup"
    },
    meta: "Effective July 1, 2025 | Archived versions | Download PDF",
    p3: "We build a range of services that help millions of people daily to explore and interact with the world in new ways. Our services include:",
    services_list: [
      "Google apps, sites, and devices, like Search, YouTube, and Google Home",
      "Platforms like the Chrome browser and Android operating system",
      "Products that are integrated into third-party apps and sites, like ads, analytics, and embedded Google Maps"
    ],
    p4: "You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode, which helps keep your browsing private from other people who use your device. And across our services, you can adjust your privacy settings to control whether we collect some types of data and how we use it.",
    p5: "To help explain things as clearly as possible, we’ve added examples, explanatory videos, and definitions for key terms. And if you have any questions about this Privacy Policy, you can contact us."
  };

  const infoCollectProps = {
    title: "Information Google collects",
    subtitle: "We want you to understand the types of information we collect as you use our services",
    paragraphs: [
      "We collect information to provide better services to all our users — from figuring out basic stuff like which language you speak, to more complex things like which ads you’ll find most useful, the people who matter most to you online, or which YouTube videos you might like. The information Google collects, and how that information is used, depends on how you use our services and how you manage your privacy controls.",
      "When you’re not signed in to a Google Account, we store the information we collect with unique identifiers tied to the browser, application, or device you’re using. This allows us to do things like maintain your preferences across browsing sessions, such as your preferred language or whether to show you more relevant search results or ads based on your activity.",
      "When you’re signed in, we also collect information that we store with your Google Account, which we treat as personal information."
    ],
  };

  const whyCollectProps = {
    title: "Why Google collects data",
    subtitle: "We use data to build better services",
    paragraphs: [
      "We use the information we collect from all our services for the following purposes:"
    ],
  };

  const privacyControlsProps = {
    title: "Your privacy controls",
    subtitle: "You have choices regarding the information we collect and how it's used",
    paragraphs: [
      "This section describes key controls for managing your privacy across our services. You can also visit the Privacy Checkup, which provides an opportunity to review and adjust important privacy settings. In addition to these tools, we also offer specific privacy settings in our products — you can learn more in our Product Privacy Guide."
    ],
  };

  const sharingInfoProps = {
    title: "Sharing your information",
    paragraphs: [
      "Many of our services let you share information with other people, and you have control over how you share. For example, you can share videos on YouTube publicly or you can decide to keep your videos private. Remember, when you share information publicly, your content may become accessible through search engines, including Google Search.",
      "When you’re signed in and interact with some Google services, like leaving comments on a YouTube video or reviewing an app in Play, your name and photo appear next to your activity. We may also display this information in ads depending on your Shared endorsements setting."
    ],
  };

  const keepingSecureProps = {
    title: "Keeping your information secure",
    subtitle: "We build security into our services to protect your information",
    paragraphs: [
      "All Google products are built with strong security features that continuously protect your information. The insights we gain from maintaining our services help us detect and automatically block security threats from ever reaching you. And if we do detect something risky that we think you should know about, we’ll notify you and help guide you through steps to stay better protected.",
      "We work hard to protect you and Google from unauthorized access, alteration, disclosure, or destruction of information we hold, including:"
    ],
  };

  const exportDeleteProps = {
    title: "Exporting & deleting your information",
    subtitle: "You can export a copy of your information or delete it from your Google Account at any time",
    paragraphs: [
      "You can export a copy of content in your Google Account if you want to back it up or use it with a service outside of Google.",
      "To delete your information, you can:"
    ],
  };

  const retainingInfoProps = {
    title: "Retaining your information",
    paragraphs: [
      "We retain the data we collect for different periods of time depending on what it is, how we use it, and how you configure your settings:"
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-24 sm:py-32">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{introductionProps.title}</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-300 max-w-4xl mx-auto">{introductionProps.p1}</motion.p>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="mt-4 text-lg text-slate-300 max-w-4xl mx-auto">{introductionProps.p2}</motion.p>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6 divide-y divide-slate-800">
        {/* Introduction */}
        <section id="introduction" className="py-16">
          <Callout {...introductionProps.checkup} />
          <p className="text-center text-sm text-slate-500 my-8">{introductionProps.meta}</p>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{introductionProps.p3}</p>
            <ul>{introductionProps.services_list.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{introductionProps.p4}</p>
            <p>{introductionProps.p5}</p>
          </div>
        </section>

        {/* Other Sections */}
        <InfoSection id="info_collect" {...infoCollectProps} />
        <InfoSection id="why_collect" {...whyCollectProps} />
        <InfoSection id="privacy_controls" {...privacyControlsProps} />
        <InfoSection id="sharing_info" {...sharingInfoProps} />
        <InfoSection id="keeping_secure" {...keepingSecureProps} />
        <InfoSection id="export_delete" {...exportDeleteProps} />
        <InfoSection id="retaining_info" {...retainingInfoProps} />
      </main>
    </div>
  );
}
