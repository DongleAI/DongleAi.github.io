export const headerData = {
  navLinks: [
    { key: 'header.models', path: '/models' },
    { key: 'header.science', path: '/science' },
    { key: 'header.research', path: '/research' },
    { key: 'header.about', path: '/about' },
  ],
  cta: {
    chat: 'cta.chat',
    buildApi: 'cta.buildApi',
  },
  modelsMenu: {
    title: 'header.models.title',
    exploreLink: 'header.models.explore_link',
    columns: [
      {
        title: 'header.models.gemini.title',
        subtitle: 'header.models.gemini.subtitle',
        items: [
          { key: 'header.models.gemini.items.pro', path: '#' },
          { key: 'header.models.gemini.items.flash', path: '#' },
          { key: 'header.models.gemini.items.flash_image', path: '#' },
          { key: 'header.models.gemini.items.flash_lite', path: '#' },
        ],
        learnMore: { key: 'header.models.gemini.learn_more', path: '/models/dongle' },
      },
      {
        title: 'header.models.gemma.title',
        subtitle: 'header.models.gemma.subtitle',
        items: [
          { key: 'header.models.gemma.items.gemma3', path: '#' },
          { key: 'header.models.gemma.items.gemma3n', path: '#' },
          { key: 'header.models.gemma.items.shieldgemma2', path: '#' },
        ],
        learnMore: { key: 'header.models.gemma.learn_more', path: '/models/round' },
      },
      {
        title: 'header.models.generative.title',
        subtitle: 'header.models.generative.subtitle',
        items: [
          { key: 'header.models.generative.items.imagen', path: '/models/abyss' },
          { key: 'header.models.generative.items.lyria', path: '/models/universe' },
          { key: 'header.models.generative.items.veo', path: '/models/submarine' },
        ],
      },
      {
        title: 'header.models.ecosystem.title',
        subtitle: 'header.models.ecosystem.subtitle',
        items: [
          { key: 'header.models.ecosystem.items.robotics', path: '#' },
          { key: 'header.models.ecosystem.items.astra', path: '#' },
          { key: 'header.models.ecosystem.items.mariner', path: '#' },
          { key: 'header.models.ecosystem.items.diffusion', path: '#' },
        ],
      },
    ],
  },
  scienceMenu: {
    title: 'header.science.title',
    exploreLink: 'header.science.explore_link',
    columns: [
        {
            title: 'header.science.biology.title',
            items: [
                { key: 'header.science.biology.items.alphafold', path: '#' },
                { key: 'header.science.biology.items.alphagenome', path: '/science/alphasigma' },
                { key: 'header.science.biology.items.alphamissense', path: '#' },
                { key: 'header.science.biology.items.alphaproteo', path: '#' },
            ]
        },
        {
            title: 'header.science.climate.title',
            items: [
                { key: 'header.science.climate.items.weathernext', path: '#' },
                { key: 'header.science.climate.items.weatherlab', path: '#' },
            ]
        },
        {
            title: 'header.science.math_cs.title',
            items: [
                { key: 'header.science.math_cs.items.alphaevolve', path: '#' },
                { key: 'header.science.math_cs.items.alphaproof', path: '#' },
                { key: 'header.science.math_cs.items.alphageometry', path: '#' },
            ]
        },
        {
            title: 'header.science.physics_chem.title',
            items: [
                { key: 'header.science.physics_chem.items.gnome', path: '#' },
                { key: 'header.science.physics_chem.items.fusion', path: '#' },
                { key: 'header.science.physics_chem.items.alphaqubit', path: '#' },
            ]
        },
    ],
    sidebar: {
        title: 'header.science.transparency.title',
        items: [
            { key: 'header.science.transparency.items.synthid', path: '/science/icyid' },
        ]
    }
  },
  researchMenu: {
    title: 'header.research.title',
    exploreLink: 'header.research.explore_link',
    columns: [
      {
        title: 'header.research.projects.title',
        description: 'header.research.projects.description',
        learnMore: { key: 'header.research.projects.learn_more', path: '#' },
      },
      {
        title: 'header.research.publications.title',
        description: 'header.research.publications.description',
        learnMore: { key: 'header.research.publications.learn_more', path: '#' },
      },
      {
        title: 'header.research.news.title',
        description: 'header.research.news.description',
        learnMore: { key: 'header.research.news.learn_more', path: '#' },
      },
    ],
  },
  aboutMenu: {
    title: 'header.about.title',
    columns: [
      {
        title: 'header.about.about_gdm.title',
        learnMore: { key: 'header.about.about_gdm.learn_more', path: '/about' },
      },
      {
        title: 'header.about.news.title',
        description: 'header.about.news.description',
        learnMore: { key: 'header.about.news.learn_more', path: '#' },
      },
      {
        title: 'header.about.careers.title',
        description: 'header.about.careers.description',
        learnMore: { key: 'header.about.careers.learn_more', path: '/careers' },
      },
      {
        title: 'header.about.milestones.title',
        description: 'header.about.milestones.description',
        learnMore: { key: 'header.about.milestones.learn_more', path: '#' },
      },
      {
        title: 'header.about.education.title',
        description: 'header.about.education.description',
        learnMore: { key: 'header.about.education.learn_more', path: '#' },
      },
      {
        title: 'header.about.responsibility.title',
        description: 'header.about.responsibility.description',
        learnMore: { key: 'header.about.responsibility.learn_more', path: '/safety' },
      },
      {
        title: 'header.about.podcast.title',
        description: 'header.about.podcast.description',
        learnMore: { key: 'header.about.podcast.learn_more', path: '#' },
      },
    ],
  },
};
