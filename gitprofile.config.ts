// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jspark2000', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/jspark2000-2/jspark2000-2.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/jspark2000-2/portfolio, then set base to '/portfolio/'.
   */
  base: '/jspark2000-2.github.io/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['jspark2000-2/my-project1', 'jspark2000-2/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jspark2000-2/gitprofile', 'jspark2000-2/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI-Driven Drug Target Identification Platform',
          description:
            'Deep learning model for predicting protein-drug interactions using graph neural networks and molecular fingerprints. Achieved 85% accuracy in target identification.',
          imageUrl:
            'https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-giving-presentation-machine-learning-artificial-intelligence_1150-48771.jpg',
          link: 'https://github.com/jspark2000/drug-target-ai',
        },
        {
          title: 'Molecular Property Prediction System',
          description:
            'Machine learning pipeline for ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) prediction using ensemble methods and molecular descriptors.',
          imageUrl:
            'https://img.freepik.com/free-vector/molecules-background-science_23-2148488062.jpg',
          link: 'https://github.com/jspark2000/admet-predictor',
        },
        {
          title: 'Bioinformatics Data Processing Pipeline',
          description:
            'Scalable data processing system for genomic and proteomic data analysis using Apache Spark and cloud computing infrastructure.',
          imageUrl:
            'https://img.freepik.com/free-vector/dna-structure-white-background_1308-27148.jpg',
          link: 'https://github.com/jspark2000/bio-pipeline',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jinsoo Park - AI Drug Discovery & Software Engineer',
    description:
      'Software Engineer specializing in AI-driven drug discovery and computational biology. Passionate about applying machine learning to pharmaceutical research and bioinformatics.',
    imageURL: '',
  },
  social: {
    linkedin: 'jspark2000',
    x: '',
    mastodon: '',
    researchGate: 'jspark2000',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'jspark2000',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jspark2000@example.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'Bioinformatics',
    'Cheminformatics',
    'RDKit',
    'Molecular Modeling',
    'Drug Discovery',
    'QSAR Modeling',
    'JavaScript',
    'React.js',
    'Node.js',
    'TypeScript',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'AWS',
    'Git',
    'Linux',
  ],
  experiences: [
    {
      company: 'AI Pharmaceutical Research Lab',
      position: 'AI Research Engineer',
      from: 'March 2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Biotech Startup',
      position: 'Software Developer - Drug Discovery Platform',
      from: 'June 2022',
      to: 'February 2023',
      companyLink: 'https://example.com',
    },
    {
      company: 'University Research Center',
      position: 'Research Assistant - Computational Biology',
      from: 'September 2021',
      to: 'May 2022',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      body: 'Amazon Web Services',
      year: 'December 2023',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'TensorFlow Developer Certificate',
      body: 'Google',
      year: 'August 2023',
      link: 'https://www.tensorflow.org/certificate',
    },
    {
      name: 'Bioinformatics Specialization',
      body: 'University of California San Diego (Coursera)',
      year: 'May 2022',
      link: 'https://www.coursera.org/specializations/bioinformatics',
    },
  ],
  educations: [
    {
      institution: 'Korea University',
      degree: 'Master of Science in Computer Science & Engineering',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Seoul National University',
      degree: 'Bachelor of Science in Computer Science & Engineering',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title:
        'Graph Neural Networks for Molecular Property Prediction in Drug Discovery',
      conferenceName: '',
      journalName: 'Journal of Chemical Information and Modeling',
      authors: 'Jinsoo Park, Dr. Kim Minsu, Dr. Lee Hyejin',
      link: 'https://example.com',
      description:
        'This paper presents a novel approach using graph neural networks to predict molecular properties crucial for drug discovery. Our method demonstrates superior performance compared to traditional QSAR models, achieving state-of-the-art results on benchmark datasets including ADMET prediction tasks.',
    },
    {
      title:
        'Machine Learning Approaches for Protein-Drug Interaction Prediction',
      conferenceName:
        'International Conference on Bioinformatics and Computational Biology',
      journalName: '',
      authors: 'Jinsoo Park, Dr. Choi Sunghoon',
      link: 'https://example.com',
      description:
        'We propose a comprehensive machine learning framework for predicting protein-drug interactions using multi-modal data integration. The approach combines sequence-based features, structural information, and chemical descriptors to achieve high accuracy in binding affinity prediction.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'jspark2000', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
