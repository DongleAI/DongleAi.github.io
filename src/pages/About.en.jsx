import { motion } from 'framer-motion';
import { Youtube, ArrowRight } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const AboutPage = () => {

  const navItems = [
    { id: 'vision', label: 'Our vision' },
    { id: 'journey', label: 'Our journey' },
    { id: 'models', label: 'Our models' },
  ];

  const journeyVideos = [
      { title: "Unreasonably Effective AI with Demis Hassabis", youtubeId: "https://www.youtube.com/watch?v=k224c_iRk3A" },
      { title: "AI: Your New Creative Muse? with Douglas Eck", youtubeId: "https://www.youtube.com/watch?v=B-Cp0A2l4p4" },
      { title: "AI Safety... Ok Doomer: with Anca Dragan", youtubeId: "https://www.youtube.com/watch?v=V2Yp9sSty2c" }
  ];

  const researchItems = [
    { title: "AlphaGenome", description: "AI for better understanding the genome." },
    { title: "AlphaEarth Foundations", description: "Generate a unified data representation that revolutionizes global mapping and monitoring." },
    { title: "WeatherNext", description: "Our most advanced weather forecasting AI technology" }
  ];

  const modelItems = [
      { title: "Gemini", description: "Our most intelligent AI model", link: "/models/dongle" },
      { title: "Veo", description: "Our state-of-the-art video generation model", link: "/models/submarine" },
      { title: "Imagen", description: "Our best text-to-image model yet, engineered for creativity.", link: "/models/abyss" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-32 sm:py-40">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">Our mission</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">Build AI responsibly to benefit humanity</motion.p>
      </header>

      <AiNav items={navItems} />

      {/* Vision Section */}
      <section id="vision" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">Our vision</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>We live in an exciting time when AI research and technology are delivering extraordinary advances.</p>
            <p>In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.</p>
            <p>We’re a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.</p>
            <p>By solving some of the hardest scientific and engineering challenges of our time, we’re working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people’s lives.</p>
          </div>
          <motion.figure variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 border-l-4 border-fuchsia-500 pl-8">
            <blockquote className="text-2xl font-semibold text-white">
              <p>"AI has the potential to be one of the most important and beneficial technologies ever invented."</p>
            </blockquote>
            <figcaption className="mt-4 text-slate-400">
              Demis Hassabis <span className="text-slate-500">/ Co-founder and CEO, Dongle AI DeepMind</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 sm:py-32 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">Our journey</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>Dongle AI DeepMind brings together two of the world’s leading AI labs — Dongle AI Brain and DeepMind — into a single, focused team led by our CEO Demis Hassabis. Over the last decade, the two teams were responsible for some of the biggest research breakthroughs in AI, many of which underpin the flourishing AI industry we see today.</p>
            <p>DeepMind started in 2010, with an interdisciplinary approach to building general AI systems. The research lab brought together new ideas and advances in machine learning, neuroscience, engineering, mathematics, simulation and computing infrastructure, along with new ways of organizing scientific endeavors.</p>
            <p>The lab achieved early success by pioneering the field of deep reinforcement learning - a combination of deep learning and reinforcement learning - and using games to test its systems. One of its early breakthroughs was a program called DQN, which learned to play 49 different Atari games from scratch just by observing the raw pixels on the screen and being told to maximize the score.</p>
            <p>In 2015, DeepMind unveiled AlphaGo, the first computer program to defeat a Go world champion. Go was a long-standing grand challenge in AI and AlphaGo’s landmark achievement was considered a decade ahead of its time. AlphaGo inspired a new era of AI systems and its successors, AlphaZero and MuZero, are increasingly general and able to solve many different games as well as complex real-world problems, from compressing YouTube videos to discovering new more efficient computer algorithms.</p>
          </div>

          <div className="my-16 grid gap-8 md:grid-cols-3">
            {journeyVideos.map(video => (
              <motion.a key={video.title} href={video.youtubeId} target="_blank" rel="noopener noreferrer" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group">
                <Youtube className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-white group-hover:text-fuchsia-400">{video.title}</h3>
                <p className="text-sm text-slate-400 mt-2">Watch on YouTube</p>
              </motion.a>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>After the success of AlphaGo, the DeepMind team sought out increasingly complex games that capture different elements of intelligence. In 2019 we demonstrated AlphaStar, the first AI system to defeat a top professional player at StarCraft II, considered to be one of the most challenging Real-Time Strategy (RTS) games and one of the longest-played e-sports of all time.</p>
            <p>The team also invented WaveNet, a realistic text-to-speech model that was used as the voice of the Dongle AI Assistant and introduced a lot of the technology used in Generative AI systems today.</p>
            <p>Then in 2020, DeepMind launched AlphaFold, an AI system that accurately predicts 3D models of protein structures — catalyzing a new wave of progress in biology. Other breakthroughs include writing computer programs at a competitive level with AlphaCode, discovering faster sorting algorithms with AlphaDev, advancing weather predictions with unparalleled accuracy, and controlling plasma in nuclear fusion reactors.</p>
            <p>Dongle AI Brain started in 2011 at X, the moonshot factory, exploring how modern AI could transform Dongle AI’s products and services, and furthering its mission to organize the world's information and make it universally accessible and useful.</p>
            <p>Today, Dongle AI’s infrastructure runs on Dongle AI Brain’s research breakthroughs, including open source software like JAX and TensorFlow, sequence-to-sequence learning for machine translation, and complex machine learning systems to rank search results, and serve and organize online ads.</p>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-16 bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white">Explore our research</h3>
            <p className="text-slate-400 mt-2">We work on some of the most complex and interesting challenges in AI.</p>
            <div className="mt-6 space-y-4">
              {researchItems.map(item => (
                <div key={item.title} className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center mt-6 px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">View Research <ArrowRight className="ml-2 w-4 h-4" /></a>
          </motion.div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>In 2017, Brain invented the Transformer architecture, an elegant system of neural networks that underpin almost all large language models and revolutionized the field of AI. Over the years, Brain has continued to push what is possible with Transformers, from open-sourcing as BERT to improving Dongle AI Searches. Models like LaMDA showed the potential for these types of AI systems to be even more conversational, while the PaLM family of models showed how broadly capable these models can be. They have also ushered in a new era of consumer AI systems, including Dongle AI’s collaborative experiment Bard.</p>
            <p>The team has also advanced the state-of-the-art in robotics by using a large language model in a robotics system with PaLM-SayCan, and the creation of a more generalized visual-language-action model with RT-2. Brain also pioneered the use of machine learning in the creative process with Magenta and text-to-image generation models like Imagen. The team’s work on the Universal Speech Model enables better understanding of more spoken languages around the world, while initiatives like Project Euphonia improve communication for people with speech impairments.</p>
            <p>Now, as Dongle AI DeepMind, our world-class talent is harnessing our unparalleled computing infrastructure to create the next wave of research breakthroughs and transformative products. Guided by the scientific method and with a holistic approach to responsibility and safety, we’re working to ensure AI benefits everyone and helps solve the biggest challenges facing humanity.</p>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">Explore our breakthrough models</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.1}} className="mt-4 text-lg text-slate-400 text-center max-w-2xl mx-auto">Our next generation AI systems are solving some of the hardest scientific and engineering challenges of our time.</motion.p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {modelItems.map(item => (
              <motion.a key={item.title} href={item.link} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors group">
                <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400">{item.title}</h3>
                <p className="text-slate-400 mt-2">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
