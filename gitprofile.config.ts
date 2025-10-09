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
        projects: ['skkuding/codedang', 'skku-royals/official-webpage'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Codedang',
          description: 'Coding platform for SKKU students & lecture',
          imageUrl: '',
          link: 'https://github.com/skkuding/codedang',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jisoo Park - AI Drug Discovery & Software Engineer',
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
    email: 'idpjs2000@g.skku.edu',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'PyTorch',
    'Bioinformatics',
    'Cheminformatics',
    'RDKit',
    'Molecular Dynamics',
    'JavaScript',
    'React.js',
    'Node.js',
    'TypeScript',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Docker',
  ],
  experiences: [
    {
      company: 'Generative Bio Design Lab',
      position: 'Research Intern',
      from: 'Mar 2025',
      to: 'Present',
      companyLink: 'https://genbiodesignlab.com',
    },
    {
      company: 'Crois',
      position: 'Software Developer',
      from: 'Mar 2024',
      to: 'Feb 2025',
      companyLink: 'https://crois.co.kr',
    },
    {
      company: 'Human Trust',
      position: 'Software Developer',
      from: 'May 2023',
      to: 'Feb 2024',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'SungKyunKwan University',
      degree: 'Bachelor of Computer Science & Applied Artificial Inteligence',
      from: '2019',
      to: '2025',
    },
  ],
  publications: [],
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
