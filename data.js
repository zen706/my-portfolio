const links = [
  {
    label: 'gitHub',
    icon: "<i class='bi bi-github'></i>",
    url: 'https://github.com/zen706',
  },
  {
    label: 'twitter',
    icon: "<i class='bi bi-twitter'></i>",
    url: '',
  },
  {
    label: 'email',
    icon: "<i class='bi bi-envelope'></i>",
    url: '',
  },
]

const data = [
  {
    id: 1,
    category: 'React',
    title: 'random quote machine',
    img: './images/random-quote-machine.png',
    url: 'https://istaro.github.io/react-app-random-quote-machine/',
    codeUrl: 'https://github.com/IsTaro/react-app-random-quote-machine',
    difficulty: 2,
    desc:"freeCodeCamp Front End Development Libraries's Challenge.",
  },
  {
    id: 2,
    category: 'React',
    title: 'drum machine',
    img: './images/drum-machine.png',
    url: 'https://unrivaled-treacle-461848.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/drum-machine',
    difficulty: 3,
    desc:"freeCodeCamp Front End Development Libraries's Challenge.",
  },
  {
    id: 3,
    category: 'React',
    title: 'calculator',
    img: './images/calculator.png',
    url: 'https://tranquil-beignet-155758.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/react-app-calculator',
    difficulty: 3,
    desc:"freeCodeCamp Front End Development Libraries's Challenge.",
  },
  {
    id: 4,
    category: 'React',
    title: '25clock',
    img: './images/25clock.png',
    url: 'https://sprightly-taiyaki-f87361.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/25-5-clock',
    difficulty: 3,
    desc:"freeCodeCamp Front End Development Libraries's Challenge.",
  },
  {
    id: 5,
    category: 'React',
    title: 'markdown previewwer',
    img: './images/markdown-previewwer.png',
    url: 'https://vocal-biscotti-540ef9.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/markdown-previewer',
    difficulty: 2,
    desc:"freeCodeCamp Front End Development Libraries's Challenge.",
  },
  {
    id: 6,
    category: 'Vanilla-js',
    title: 'interactive rating component',
    img: './images/interactive-rating-component.png',
    url: 'https://celebrated-pika-e69aaf.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/interactive-rating-component-main',
    difficulty: 1,
    desc:"frontendmentor's challenge.",
  },
  {
    id: 7,
    category: 'Vanilla-js',
    title: 'launch countdown timer',
    img: './images/launch-countdown-timer.png',
    url: 'https://moonlit-youtiao-0892f7.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/launch-countdown-timer',
    difficulty: 3,
    desc:"frontendmentor's challenge.",
  },
  {
    id: 8,
    category: 'Vanilla-js',
    title: 'ecommerce product page',
    img: './images/ecommerce-product-page.png',
    url: 'https://subtle-gumption-59ff95.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/ecommerce-product-page',
    difficulty: 3,
    desc:"frontendmentor's challenge.",
  },
  {
    id: 9,
    category: 'Html/css',
    title: 'ip address tracker',
    img: './images/ip-address-tracker.png',
    url: 'https://chic-caramel-a9b91e.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/ip-address-tracker',
    difficulty: 3,
    desc:"frontendmentor's challenge.",
  },
  {
    id: 10,
    category: 'Vanilla-js',
    title: 'show the local weather',
    img: './images/show-the-local-weather.png',
    url: 'https://thunderous-travesseiro-456d5b.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/show-the-local-weather',
    difficulty: 2,
    desc:"freeCodeCamp's Take Home Project.",
  },
  {
    id: 11,
    category: 'Clone-site',
    title: 'clone ableton',
    img: './images/clone-ableton.png',
    url: 'https://genuine-gnome-9a8333.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/clone-ableton',
    difficulty: 4,
    desc:"practice project. unofficial version.",
  },
  {
    id: 12,
    category: 'Clone-site',
    title: 'clone backstage talks',
    img: './images/clone-backstage-talks.png',
    url: 'https://glittering-bonbon-800429.netlify.app/',
    codeUrl: 'https://github.com/IsTaro/clone-backstage-talks',
    difficulty: 3,
    desc:"practice project. unofficial version.",
  },
  // {
  //   id: 13,
  //   category: 'react',
  //   title: 'to do list',
  //   img: './images/to-do-list.png',
  //   url: 'https://istaro.github.io/to-do-list/',
  // codeUrl:'https://github.com/IsTaro/to-do-list',
  //   difficulty: 3,
    // desc:"",
  // },
  {
    id: 13,
    category: 'React',
    title: 'wikipedia viewer',
    img: './images/wikipedia-viewer.png',
    url: 'https://istaro.github.io/wikipedia-viewer/',
    codeUrl: 'https://github.com/IsTaro/wikipedia-viewer',
    difficulty: 3,
    desc:"freeCodeCamp's Take Home Project.",
  },
  {
    id: 14,
    category: 'Node.js',
    title: 'timestamp microservice',
    img: './images/timestamp-microservice.png',
    url: 'https://boilerplate-project-timestamp.johnsmith217.repl.co/',
    codeUrl: 'https://replit.com/@johnsmith217/boilerplate-project-timestamp',
    difficulty: 1,
    desc:"freeCodeCamp Back End Development and APIs Certification's challenge.",
  },
  {
    id: 15,
    category: 'Node.js',
    title: 'Request Header Parser Microservice',
    img: './images/request-header-parser-microservice.png',
    url: 'https://boilerplate-project-headerparser.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-headerparser',
    difficulty: 1,
    desc:"freeCodeCamp Back End Development and APIs Certification's challenge.",
  },
  {
    id: 16,
    category: 'Node.js',
    title: 'URL Shortener Microservice',
    img: './images/URL-shortener-microservice.png',
    url: 'https://boilerplate-project-urlshortener.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-urlshortener',
    difficulty: 1,
    desc:"freeCodeCamp Back End Development and APIs Certification's challenge.",
  },
  {
    id: 17,
    category: 'Node.js',
    title: 'Exercise Tracker',
    img: './images/exercise-tracker.png',
    url: 'https://boilerplate-project-exercisetracker.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-exercisetracker',
    difficulty: 3,
    desc:"freeCodeCamp Back End Development and APIs Certification's challenge.",
  },
  {
    id: 18,
    category: 'Node.js',
    title: 'File Metadata Microservice',
    img: './images/file-metadata-microservice.png',
    url: 'https://boilerplate-project-filemetadata.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-filemetadata',
    difficulty: 1,
    desc:"freeCodeCamp Back End Development and APIs Certification's challenge.",
  },
  {
    id: 19,
    category: 'Node.js',
    title: 'Metric Imperial Converter',
    img: './images/metric-imperial-converter.png',
    url: 'https://boilerplate-project-metricimpconverter.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-metricimpconverter',
    difficulty: 3,
    desc:"freeCodeCamp Quality Assurance Certification's challenge.",
  },
  {
    id: 20,
    category: 'Node.js',
    title: 'Issue Tracker',
    img: './images/issue-tracker.png',
    url: 'https://boilerplate-project-issuetracker.johnsmith217.repl.co/',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-issuetracker',
    difficulty: 5,
    desc:"freeCodeCamp Quality Assurance Certification's challenge.",
  },
  {
    id: 21,
    category: 'Node.js',
    title: 'Personal Library',
    img: './images/personal-library.png',
    url: 'https://boilerplate-project-library.johnsmith217.repl.co',
    codeUrl: 'https://replit.com/@johnsmith217/boilerplate-project-library',
    difficulty: 3,
    desc:"freeCodeCamp Quality Assurance Certification's challenge.",
  },
  {
    id: 22,
    category: 'Node.js',
    title: 'Sudoku Solver',
    img: './images/sudoku-solver.png',
    url: 'https://boilerplate-project-sudoku-solver.johnsmith217.repl.co',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-sudoku-solver',
    difficulty: 4,
    desc:"freeCodeCamp Quality Assurance Certification's challenge.",
  },
  {
    id: 23,
    category: 'Node.js',
    title: 'American British Translator',
    img: './images/american-british-translator.png',
    url: 'https://boilerplate-project-american-british-english-translator.johnsmith217.repl.co',
    codeUrl:
      'https://replit.com/@johnsmith217/boilerplate-project-american-british-english-translator',
    difficulty: 5,
    desc:"freeCodeCamp Quality Assurance Certification's challenge.",
  },
  {
    id: 24,
    category: 'Vanilla-js',
    title: 'my portfolio',
    img: './images/my-portfolio.png',
    url: 'https://brilliant-selkie-3f8562.netlify.app/',
    codeUrl:
      'https://github.com/zen706/my-portfolio',
    difficulty: 3,
    desc:"my portfolio.",
  },
]

export { data, links }