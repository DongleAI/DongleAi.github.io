import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, Briefcase, MapPin } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Hero = ({ heroTitle, heroSubtitle, heroCta }) => (
  <header className="text-center px-6 py-32 sm:py-40 bg-slate-800/50">
    <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{heroTitle}</motion.h1>
    <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">{heroSubtitle}</motion.p>
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mt-8">
      <a href="#open-roles" className="inline-block px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
        {heroCta}
      </a>
    </motion.div>
  </header>
);

const Collaboration = ({ title, p1, p2, p3, insideTitle, insideSubtitle, insideVideos }) => (
  <section id="collaboration" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white text-center">{insideTitle}</h3>
        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">{insideSubtitle}</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insideVideos.map(video => (
            <a key={video.name} href={video.link} className="group">
              <div className="aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg overflow-hidden">
                <img src={`https://via.placeholder.com/400x225.png/0f172a/94a3b8?text=${video.name}`} alt={video.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white group-hover:text-fuchsia-400">{video.name}</h4>
              <p className="text-slate-400">{video.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Mission = ({ title, p1, imageAlt }) => (
  <section id="mission" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
        <p className="mt-6 prose prose-invert prose-lg text-slate-300">{p1}</p>
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=Team" alt={imageAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const TeamSection = ({ teamKey, title, description, imageAlt }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center py-12">
    <div className={`aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden ${teamKey === 'engineering' || teamKey === 'responsibility' || teamKey === 'operations' ? 'md:order-last' : ''}`}>
      <img src={`https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=${title}`} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 prose prose-invert prose-lg text-slate-300">{description}</p>
    </div>
  </div>
);

const Teams = ({ title, teamSections, quoteText, quoteAuthor, quoteRole }) => (
  <section id="teams" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <div className="mt-20 divide-y divide-slate-800">
        {teamSections.map(team => (
          <TeamSection key={team.teamKey} {...team} />
        ))}
      </div>
      <figure className="mt-20 border-l-4 border-fuchsia-500 pl-8">
        <blockquote className="text-2xl font-semibold text-white">
          <p>"{quoteText}"</p>
        </blockquote>
        <figcaption className="mt-4 text-slate-400">
          {quoteAuthor} <span className="text-slate-500">/ {quoteRole}</span>
        </figcaption>
      </figure>
    </div>
  </section>
);

const OpenRoles = ({ title, p1, filterReset, filterJobsFound, jobs }) => (
  <section id="open-roles" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">{p1}</p>
      <div className="mt-12 bg-slate-900 rounded-lg">
        <div className="p-4 flex justify-between items-center border-b border-slate-800">
          <button className="text-sm text-fuchsia-400 hover:underline">{filterReset}</button>
          <p className="text-sm text-slate-400">{filterJobsFound}</p>
        </div>
        <div className="divide-y divide-slate-800">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 grid md:grid-cols-3 gap-4 items-center hover:bg-slate-800/50">
              <h3 className="md:col-span-2 text-lg font-semibold text-white">{job.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 text-sm text-slate-400">
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />{job.team}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function CareersPage() {
  const navItems = [
    { id: 'collaboration', label: "Flexible collaboration" },
    { id: 'mission', label: "Mission" },
    { id: 'teams', label: "Teams" },
    { id: 'open-roles', label: "Open roles" },
  ];

  const heroProps = {
    heroTitle: "Careers",
    heroSubtitle: "Many disciplines, one common goal",
    heroCta: "View all open roles",
  };

  const collaborationProps = {
    title: "Flexible collaboration",
    p1: "At the heart of Dongle AI DeepMind’s mission is our commitment to act as responsible pioneers in the field of AI, in service of society’s needs and expectations.",
    p2: "This requires us to ensure our technology is built by and for those who represent the world we live in. It’s a responsibility we can only take by continuing to cultivate an internal culture that recognizes how our diversity of experience, knowledge, backgrounds, and perspectives enables us to find connections that solve real world problems.",
    p3: "Collaboration is at the heart of everything we do, but we know it may look different every day. That’s why we have a working model that allows for the flexibility of in-office and remote working optimized across the organization.",
    insideTitle: "Inside Dongle AI DeepMind",
    insideSubtitle: "In this series, we’ll take you on a journey across our offices, giving you an inside look into the work that we do, and most importantly, introduce you to some of the people that make it all possible.",
    insideVideos: [
      { name: "Paige's story", topic: "The possibility of generative AI", link: "#" },
      { name: "Dawn's story", topic: "Putting ethics into practice", link: "#" },
      { name: "Kory's story", topic: "Finding humour in AI", link: "#" },
      { name: "Deeni's story", topic: "Exploring the next generation of AI products", link: "#" },
      { name: "Stefano’s story", topic: "Robotics and AI", link: "#" },
      { name: "Anna's story", topic: "Building the tools to make AI breakthroughs possible", link: "#" }
    ],
  };

  const missionProps = {
    title: "A community with a unique mission",
    p1: "We’re a dedicated scientific community, committed to “solving intelligence” and ensuring our technology is used for widespread public benefit. Together, we build computer systems that learn how to solve problems and advance scientific discovery for all.",
    imageAlt: "Two colleagues sitting side by side, smiling across a desk at an unseen object or person.",
  };

  const teamSections = [
    { teamKey: 'research', title: "Research", description: "Our research teams focus on pushing the boundaries of artificial intelligence theory and practice, scientific discoveries, and AI-powered products. Our culture encourages collaboration across all research groups, leading to ambitious creativity and innovative breakthroughs.", imageAlt: "A group of colleagues sharing a joke." },
    { teamKey: 'engineering', title: "Engineering", description: "Our engineers build the foundations of scalable, responsible AI research and development programs across our teams. They support some of the most advanced and large-scale AI research in the world, and help integrate these technologies into new AI-powered products.", imageAlt: "A group of colleagues sharing a joke." },
    { teamKey: 'science', title: "Science & Sustainability", description: "This multidisciplinary team works on AI projects that can fundamentally change our understanding of the physical world. These projects include exploring the potential for AI to enable breakthroughs in areas critical to solving humanity’s biggest challenges – including biology, quantum chemistry, physics, mathematics, climate, and sustainability.", imageAlt: "A man explaining something to his colleagues." },
    { teamKey: 'responsibility', title: "Responsibility & Safety", description: "Our policy experts, philosophers, and researchers work with other groups in academia, civil society, and the broader AI community to rigorously test our systems, putting ethics into practice and helping society address the impacts of AI.", imageAlt: "A group of colleagues discussing plans and challenges." },
    { teamKey: 'product', title: "Product", description: "Our product teams aim to unlock state-of-the-art artificial intelligence capabilities across Alphabet, creating positive impact and magical product experiences for billions of users. This team works to deploy Dongle AI DeepMind research into real world applications.", imageAlt: "A group of colleagues in a meeting room." },
    { teamKey: 'operations', title: "Operations", description: "Our operations team works hard to make Dongle AI DeepMind the best environment in the world for advancing AI research. Our dedicated teams include experts from program management, people development, travel, talent acquisition, public engagement and more. Together, they maintain, optimize, and nurture our culture and world-leading research.", imageAlt: "A group of colleagues in a meeting room." },
  ];

  const teamsProps = {
    title: "Our Teams",
    teamSections: teamSections,
    quoteText: "We have a real opportunity to deliver AI research and products that dramatically improve the lives of billions of people, transform industries and advance science.",
    quoteAuthor: "Demis Hassabis",
    quoteRole: "Co-founder and CEO, Dongle AI DeepMind",
  };

  const openRolesProps = {
    title: "Open roles",
    p1: "A career at Dongle AI DeepMind offers the opportunity to work closely with some of the best minds within the scientific community and beyond. We’re looking for people from all backgrounds who want to make a real, positive impact on the world.",
    filterReset: "Reset",
    filterJobsFound: "65 jobs found",
    jobs: [
      { title: "Software Engineering Manager, GeminiApp", team: "Engineering", location: "Bangalore, India" },
      { title: "AI Product Designer, Gemini App UX", team: "Operations", location: "Mountain View, California, US; New York City, New York, US; San Francisco, California, US; Seattle, Washington, US" },
      { title: "Research Engineer - ACE", team: "Research", location: "Mountain View, California, US" },
      { title: "Administrative Business Partner", team: "Operations", location: "Mountain View, California, US" },
      { title: "Director of Product Management, Robotics", team: "Operations", location: "Mountain View, California, US" },
      { title: "Staff Mobile Engineer, GeminiApp, Dongle AI DeepMind", team: "Engineering", location: "Mountain View, California, US; New York City, New York, US" },
      { title: "Technical Program Manager GeminiApp Personalization", team: "Operations", location: "Mountain View, California, US; New York City, New York, US" },
      { title: "Go-to-Market (GTM) Lead, GeminiApp", team: "Operations", location: "Mountain View, California, US" },
      { title: "Research Scientist, Multimodal LLMs", team: "Research", location: "Mountain View, California, US" },
      { title: "Research Engineer, Audio Dialogue", team: "Engineering", location: "Mountain View, California, US; New York City, New York, US" },
      { title: "Senior Mobile Engineer, GeminiApp, Dongle AI DeepMind", team: "Engineering", location: "Mountain View, California, US; New York City, New York, US" },
      { title: "Senior Staff Security Engineer, Robotics (Physical AI)", team: "Engineering", location: "Mountain View, California, US; New York City, New York, US; Virtual" },
      { title: "Technical Program Manager, GeminiApp", team: "Operations", location: "Mountain View, California, US" },
      { title: "Staff UX Researcher, Gemini App", team: "Operations", location: "Mountain View, California, US; San Francisco, California, US" },
      { title: "Technical Program Manager, Generative Video, US", team: "Operations", location: "Mountain View, California, US" },
      { title: "Executive Business Partner", team: "Operations", location: "Paris, France" },
      { title: "Group Product Manager, Gemini Robotics", team: "Operations", location: "Mountain View, California, US" },
      { title: "People Partner, GenAI", team: "Operations", location: "Mountain View, California, US" },
      { title: "Product Manager, Gemini App Automation - Deep Research", team: "Operations", location: "Mountain View, California, US" },
      { title: "Business and Corporate Development Manager (GenAI Product & Data Partnerships)", team: "Operations", location: "London, UK" }
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Hero {...heroProps} />
      <AiNav items={navItems} />
      <main>
        <Collaboration {...collaborationProps} />
        <Mission {...missionProps} />
        <Teams {...teamsProps} />
        <OpenRoles {...openRolesProps} />
      </main>
    </div>
  );
}
