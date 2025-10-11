import { motion } from 'framer-motion';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Section = ({ id, title, children }) => (
  <motion.section 
    id={id}
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.1 }}
    className="py-12 border-b border-slate-800 last:border-b-0"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </motion.section>
);

const SubSection = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </div>
);

export default function TermsPage() {
  const navItems = [
    { id: 'introduction', label: "Introduction" },
    { id: 'relationship', label: "Your relationship with Google" },
    { id: 'using_services', label: "Using Google services" },
    { id: 'content_in_services', label: "Content in Google services" },
    { id: 'software_in_services', label: "Software in Google services" },
    { id: 'problems_disagreements', label: "In case of problems or disagreements" },
    { id: 'about_terms', label: "About these terms" }
  ];

  const renderList = (items) => (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="px-6 py-24 sm:py-32 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-400">Country version: South Korea</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">Google Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective May 22, 2024 | <a href="#" className="underline hover:text-white">Archived versions</a> | <a href="#" className="underline hover:text-white">Download PDF</a>
          </p>
        </div>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6">
        <Section id="introduction" title="What’s covered in these terms">
          <p>We know it’s tempting to skip these Terms of Service, but it’s important to establish what you can expect from us as you use Google services, and what we expect from you.</p>
          <p>These Terms of Service reflect the way Google’s business works, the laws that apply to our company, and certain things we’ve always believed to be true. As a result, these Terms of Service help define Google’s relationship with you as you interact with our services. For example, these terms include the following topic headings:</p>
          {renderList([
            "What you can expect from us, which describes how we provide and develop our services",
            "What we expect from you, which establishes certain rules for using our services",
            "Content in Google services, which describes the intellectual property rights to the content you find in our services — whether that content belongs to you, Google, or others",
            "In case of problems or disagreements, which describes other legal rights you have, and what to expect in case someone violates these terms"
          ])}
          <p>Understanding these terms is important because, by accessing or using our services, you’re agreeing to these terms.</p>
          <p>Besides these terms, we also publish a Privacy Policy. Although it’s not part of these terms, we encourage you to read it to better understand how you can update, manage, export, and delete your information.</p>
        </Section>

        <Section id="relationship" title="Your relationship with Google">
            <p>These terms help define the relationship between you and Google. When we speak of “Google,” “we,” “us,” and “our,” we mean Google LLC and its affiliates. Broadly speaking, we give you permission to access and use our services if you agree to follow these terms, which reflect how Google’s business works and how we earn money.</p>
        </Section>

        <Section id="using_services" title="Using Google services">
            <SubSection title="Your Google Account">
                <p>If you meet these age requirements you can create a Google Account for your convenience. Some services require that you have a Google Account in order to work — for example, to use Gmail, you need a Google Account so that you have a place to send and receive your email.</p>
                <p>You’re responsible for what you do with your Google Account, including taking reasonable steps to keep your Google Account secure, and we encourage you to regularly use the Security Checkup.</p>
            </SubSection>
            <SubSection title="Using Google services on behalf of an organization or business">
                <p>Many organizations, such as businesses, non-profits, and schools, take advantage of our services. To use our services on behalf of an organization:</p>
                {renderList([
                  "an authorized representative of that organization must agree to these terms",
                  "your organization’s administrator may assign a Google Account to you. That administrator might require you to follow additional rules and may be able to access or disable your Google Account."
                ])}
            </SubSection>
            <SubSection title="Service-related communications">
                <p>To provide you with our services, we sometimes send you service announcements and other information. To learn more about how we communicate with you, see Google’s Privacy Policy.</p>
                <p>If you choose to give us feedback, such as suggestions to improve our services, we may act on your feedback without obligation to you.</p>
            </SubSection>
        </Section>

        <Section id="content_in_services" title="Content in Google services">
            <SubSection title="Your content">
                <p>Some of our services allow you to generate original content. Google won’t claim ownership over that content.</p>
                <p>Some of our services give you the opportunity to make your content publicly available — for example, you might post a product or restaurant review that you wrote, or you might upload a blog post that you created.</p>
                <p>See the Permission to use your content section for more about your rights in your content, and how your content is used in our services</p>
                <p>See the Removing your content section to learn why and how we might remove user-generated content from our services</p>
                <p>If you think someone is infringing your intellectual property rights, you can send us notice of the infringement and we’ll take appropriate action. For example, we suspend or close the Google Accounts of repeat copyright infringers as described in our Copyright Help Center.</p>
            </SubSection>
            <SubSection title="Google content">
                <p>Some of our services include content that belongs to Google — for example, many of the visual illustrations you see in Google Maps. You may use Google’s content as allowed by these terms and any service-specific additional terms, but we retain any intellectual property rights that we have in our content. Don’t remove, obscure, or alter any of our branding, logos, or legal notices. If you want to use our branding or logos, please see the Google Brand Permissions page.</p>
            </SubSection>
            <SubSection title="Other content">
                <p>Finally, some of our services give you access to content that belongs to other people or organizations — for example, a store owner’s description of their own business, or a newspaper article displayed in Google News. You may not use this content without that person or organization’s permission, or as otherwise allowed by law. The views expressed in other people or organizations’ content are theirs, and don’t necessarily reflect Google’s views.</p>
            </SubSection>
        </Section>

        <Section id="software_in_services" title="Software in Google services">
            <p>Some of our services include downloadable or preloaded software. We give you permission to use that software as part of the services.</p>
            <p>The license we give you is:</p>
            {renderList([
              "worldwide, which means it’s valid anywhere in the world",
              "non-exclusive, which means that we can license the software to others",
              "royalty-free, which means there are no monetary fees for this license",
              "personal, which means it doesn’t extend to anyone else",
              "non-assignable, which means you’re not allowed to assign the license to anyone else"
            ])}
            <p>Some of our services include software that’s offered under open source license terms that we make available to you. Sometimes there are provisions in the open source license that explicitly override parts of these terms, so please be sure to read those licenses.</p>
            <p>You may not copy, modify, distribute, sell, or lease any part of our services or software.</p>
        </Section>

        <Section id="problems_disagreements" title="In case of problems or disagreements">
            <p>Both the law and these terms give you the right to (1) a certain quality of service, and (2) ways to fix problems if things go wrong.</p>
            {/* Further subsections can be added here if needed */}
        </Section>

        <Section id="about_terms" title="About these terms">
            <p>By law, you have certain rights that can’t be limited by a contract like these terms of service. These terms are in no way intended to restrict those rights.</p>
            <p>These terms describe the relationship between you and Google. They don’t create any legal rights for other people or organizations, even if others benefit from that relationship under these terms.</p>
            <p>We want to make these terms easy to understand, so we’ve used examples from our services. But not all services mentioned may be available in your country.</p>
            <p>If these terms conflict with the service-specific additional terms, the additional terms will govern for that service.</p>
            <p>If it turns out that a particular term is not valid or enforceable, this will not affect any other terms.</p>
            <p>If you don’t follow these terms or the service-specific additional terms, and we don’t take action right away, that doesn’t mean we’re giving up any rights that we may have, such as taking action in the future.</p>
            <p>We may update these terms and service-specific additional terms (1) to reflect changes in our services or how we do business — for example, when we add new services, features, technologies, pricing, or benefits (or remove old ones), (2) for legal, regulatory, or security reasons, or (3) to prevent abuse or harm.</p>
            <p>If we materially change these terms or service-specific additional terms, we’ll provide you with 30 days advance notice and the opportunity to review the changes, except (1) when we launch a new service or feature that’s favorable to users, or (2) in urgent situations, such as preventing ongoing abuse or responding to legal requirements. If you don’t agree to the new terms, you should remove your content and stop using the services. You can also end your relationship with us at any time by closing your Google Account.</p>
        </Section>

      </main>
    </div>
  );
}
