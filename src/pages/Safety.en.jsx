import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Section = ({ title, paragraphs }) => (
  <div className="mb-16">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-8"
    >
      {title}
    </motion.h2>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
      {paragraphs.map((p, index) => (
        <motion.p
          key={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index }}
        >
          {p}
        </motion.p>
      ))}
    </div>
  </div>
);

export default function SafetyPage() {
  const sections = [
    {
      title: "Our approach",
      paragraphs: [
        "AI can provide extraordinary benefits, but like all transformational technology, it could have negative impacts unless it’s developed and deployed responsibly.",
        "Guided by our AI Principles, we work to anticipate and evaluate our systems against a broad spectrum of AI-related risks, taking a holistic approach to responsibility, safety and security. Our approach is centered around responsible governance, research and impact.",
        "To empower teams to pioneer responsibly and safeguard against harm, the Responsibility and Safety Council (RSC), our longstanding internal review group co-chaired by our COO Lila Ibrahim and VP, Responsibility Helen King, evaluates Google DeepMind’s research, projects and collaborations against our AI Principles, advising and partnering with research and product teams on our highest impact work.",
        "Our AGI Safety Council, led by our Co-Founder and Chief AGI Scientist Shane Legg, works closely with the RSC, to safeguard our processes, systems and research against extreme risks that could arise from powerful AGI systems in the future.",
        "We’re also collaborating with researchers across industry and academia to make breakthroughs in AI, while engaging with governments and civil society to address challenges that can’t be solved by any single group.",
        "We also have world class teams focusing on technical safety, ethics, governance, security, and public engagement, who work to grow our collective understanding of AI-related risks and potential mitigations. Leading the industry forward, our recent research includes developing stronger security protocols on the path to AGI, creating a new benchmark for evaluating the factuality of large language models, and exploring the promise and risks of a future with more advanced AI assistants. We also introduced, and continue to update, our Frontier Safety Framework - a set of protocols to help us stay ahead of possible severe risks from powerful frontier AI models.",
        "Our interdisciplinary teams are committed to understanding the full spectrum of AI opportunities and risk, helping advance the entire field of AI safety by investing in, and prioritising, cutting-edge research and best-practices.",
      ],
    },
    {
      title: "Secure and Privacy-Preserving AI",
      paragraphs: [
        "As AI capabilities expand, so does the potential for misuse. At Google DeepMind, we recognize the critical importance of safeguarding user security and privacy. For example, this includes investing in mitigations to limit the potential for misuse when the model is deployed and threat modelling research that helps identify capability thresholds where heightened security is necessary.",
        "As AI becomes more agentic, it can help users on a more proactive and continuous basis, which introduces the risks of collecting and misusing the user data. We aim to invest in both privacy preserving infrastructure and models, and work with the rest of GDM to adapt these techniques into Gemini and products.",
        "By prioritizing these principles, we aim to foster an AI ecosystem where we can unlock advanced capabilities of AI technologies without sacrificing user security, privacy and trust.",
      ],
    },
    {
      title: "AI that benefits everyone",
      paragraphs: [
        "Our teams work with many brilliant non-profits, academics, and other companies to apply AI to solve problems that underpin global challenges, while proactively mitigating risks.",
        "To help prevent the misuse of our technologies, in 2023 we established the cross-industry Frontier Model Forum to ensure safe and responsible development of frontier AI models.",
        "We collaborate with other leading research labs, as well as the Partnership on AI — which we helped co-found to bring together academics, charities, and company labs to solve common challenges.",
        "We believe we have the opportunity to demonstrate that AI can and should be deployed for the greater good. We’re driven to enable equitable access and adoption of our AI models, so that these developments can empower, impact and benefit us all.",
        "For example, we’ve developed the AlphaFold Server to broaden access to our breakthrough model, AlphaFold 3, and accompanying educational materials to support best practice in the community.",
        "In addition, we collaborate with many brilliant partners to catalyse the use of AI in fighting key global issues - including driving progress in the fight against AMR.",
        "Beyond that we also work to broaden access to AI education - for example by supporting grassroots efforts like the African Deep Learning Indaba, providing funding used for scholarships and Fellowships, or partnering with the Raspberry Pi Foundation to launch Experience AI, which equips teachers to educate and inspire 11-to 14-year-olds about AI.",
        "Since Experience AI’s launch in April 2023, this program has been accessed by educators across 130 countries, and with $10 million from Google.org, Raspberry Pi Foundation now aims to bring the Experience AI program to more than 2 million young people across Europe, Middle East and Africa, so they can become forward-thinking, responsible and safe users of AI.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Responsibility & Safety
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-fuchsia-300 max-w-3xl mx-auto">
            We want to build AI responsibly to benefit humanity.
          </p>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <Section key={index} title={section.title} paragraphs={section.paragraphs} />
        ))}
      </main>
    </div>
  );
};
