export const employment = {
  current: {
    title: 'Commit',
    link: 'https://commit.dev',
  },
  past: [
    {
      title: 'Agency',
      link: 'https://agency.sc',
    },
    {
      title: 'Mentally Friendly',
      link: 'https://mentallyfriendly.com',
    },
    {
      title: 'Southern Cross Austereo',
      link: 'https://www.southerncrossaustereo.com.au/',
    },
    {
      title: 'Nightjar',
      link: 'https://nightjar.co',
    },
    {
      title: 'Engine Digital',
      link: 'https://enginedigital.com',
    },
    {
      title: 'the NBA',
      link: 'https://nba.com',
    },
  ],
  situation: [
    {
      status: 'studying',
      strike: true,
    },
    {
      status: 'freelancing',
      strike: true,
    },
    {
      status: 'employed',
      strike: false,
    },
  ],
  location: [
    {
      name: 'New York',
      strike: true,
    },
    {
      name: 'Sydney',
      strike: true,
    },
    {
      name: 'Whistler',
      strike: false,
    },
  ],
};

export const projects = {
  professional: [
    {
      title: 'NBA.com',
      link: 'https://nba.com',
      tech: 'React / Next.js / Tailwind.css',
    },
    {
      title: 'NBA All-Star Vote',
      link: '/nba-all-star-vote',
      tech: 'React / Next.js / Tailwind.css',
    },
    {
      title: 'PodcastOne Au',
      link: 'https://www.podcastone.com.au/',
      tech: 'React / Next.js / GraphQL / Styled Components / Node / Jest',
    },
    {
      title: 'Hit',
      link: 'https://www.hit.com.au/',
      tech: 'React / Next.js / Styled Components / Node / Jest',
    },
    {
      title: 'TripleM',
      link: 'https://www.triplem.com.au/',
      tech: 'React / Next.js / Styled Components / Node / Jest',
    },
    {
      title: 'Hubble Talent',
      link: '/hubble',
      tech: 'React / Ant Design',
    },
    {
      title: 'PrimeX Connect App',
      link: 'http://primexconnect.com/',
      tech: 'React / Laravel / Pusher.io',
    },
    {
      title: 'Check In',
      link: '/check-in',
      tech: 'React / Ant Design',
    },
    {
      title: 'Schwarzkopf Style Studio',
      link: '/schwarzkopf-style-studio',
      tech: 'HTML / SCSS / jQuery / Angular / Laravel',
    },
    {
      title: 'CareerHQ',
      link: 'https://www.careerhq.com.au/',
      tech: 'HTML / SCSS / Custom PHP CMS / jQuery',
    },
    {
      title: 'Ground Floor Wentworth Chambers',
      link: 'http://www.wentworthchambers.com.au/',
      tech: 'Statamic CMS / Handlebars / SCSS',
    },
  ],
  personal: [
    {
      title: 'QuickHub for GitHub',
      link: '/quickhub-for-github',
      tech: 'Chrome Extension / React / Tailwind',
    },
    {
      title: '2020',
      link: '/2020',
      tech: 'a depiction',
    },
    {
      title: 'Bero',
      link: 'https://getbero.app',
      tech: 'React Native / Styled Components',
    },
    {
      title: '600,000 Pantone Colour Schemes',
      link: '/six-hundred-thousand',
      tech: 'Node',
    },
    {
      title: 'Neumorphism Experiment',
      link: '/neumorphism-experiment',
      tech: 'Tailwind.css / JS',
    },
    // {
    //   title: 'Trivia!',
    //   link: '/trivia',
    //   tech: 'Tailwind.css / JS / Firestore / Google Sheets',
    // },
    {
      title: 'Hami.sh',
      link: 'https://github.com/searleb/hamish',
      tech: 'JS / Bash',
    },
    {
      title: 'Text Clock',
      link: 'https://chrome.google.com/webstore/detail/text-clock/caacmmeopdailkdlgkimndodjipilaha',
      tech: 'jQuery / SCSS',
    },
    {
      title: 'Hex Clock',
      link: 'https://chrome.google.com/webstore/detail/hex-clock/pdonflklnjbgccapfenhjdanehgejbkj',
      tech: 'jQuery / SCSS',
    },
  ],
};

export const resume = {
  education: [
    {
      date: '2014',
      school: 'General Assembly',
      location: 'Sydney, Australia',
      title: 'Web Development Immersive',
    },
    {
      date: '2013',
      school: 'General Assembly',
      location: 'New York, USA',
      title: 'Front End Web Development',
    },
  ],
  work: [
    {
      date: 'February 2020 - Nov 2020',
      location: 'The NBA',
      title: 'Senior Front-End Web Developer',
    },
    {
      date: 'March 2018 - June 2019',
      location: 'Southern Cross Austereo',
      title: 'Senior Front-End Web Developer',
    },
    {
      date: 'November 2014 - March 2018',
      location: 'Mentally Friendly',
      title: 'Senior / Front-End Web Developer',
    },
    {
      date: 'August 2013 - Present',
      location: '👨🏻‍💻',
      title: 'Freelance Front-End Web Developer',
      gigs: [
        {
          title: 'Engine Digital / NBA',
          location: 'Remote / Vancouver, Can',
        },
        {
          title: 'Nightjar',
          location: 'Remote',
        },
        {
          title: 'Southern Cross Austereo',
          location: 'Sydney, Aus',
        },
        {
          title: 'The Gift Collective',
          location: 'Sydney, Aus',
        },
        {
          title: 'Agency | Strategic Creative',
          location: 'Sydney, Aus',
        },
        {
          title: 'GuihenJones',
          location: 'Sydney, Aus',
        },
        {
          title: 'ALT//SHFT',
          location: 'NYC, USA',
        },
        {
          title: 'Untitled Productions',
          location: 'NYC, USA',
        },
      ],
    },
  ],
};

const suffix = 'Bill Searle';
export const meta = {
  home: {
    title: 'Bill Searle - Front End Web Developer',
    desc: `Bill Searle is a front end web developer, specializing in React.js development. Currently working remotely in Whistler for ${employment.current.title}`,
    url: '',
  },
  bero: {
    title: `Bero App | ${suffix}`,
    desc: 'Bero is the easiest, most direct navigator for iOS.',
    url: '/bero',
  },
  contact: {
    title: `Contact | ${suffix}`,
    desc: 'Contact me if you\'d like to work together.',
    url: '/contact',
  },
  error: {
    title: `404 | ${suffix}`,
    desc: 'Oops, we\'ve got lost!',
    url: '/404',
  },
  resume: {
    title: `Resume / CV | ${suffix}`,
    desc: 'Take a glance at my employment history.',
    url: '/resume',
  },
  hubble: {
    title: `Hubble Talent | ${suffix}`,
    desc: 'Internal SCA Project - Hubble Talent Dashboard',
    url: '/hubble',
  },
  checkin: {
    title: `Check In | ${suffix}`,
    desc: 'Internal Mentally Friendly Project - Client Check-in and Dashboard',
    url: '/check-in',
  },
  six: {
    title: `Six Hundred Thousand Colour Schemes | ${suffix}`,
    desc: 'Six Hundred Thousand Contrast Safe Pantone Colour Schemes.',
    url: '/six-hundred-thousand',
  },
  nba: {
    title: `NBA All-Star Vote | ${suffix}`,
    desc: 'Send your favorite players to the NBA All-Star Game in Chicago.',
    url: '/nba-all-star-vote',
  },
  styleStudio: {
    title: `Schwarzkoft Style Studio | ${suffix}`,
    desc: 'Editorial style blog and marketing site for Schwarzkoft.',
    url: '/schwarzkoft-style-studio',
  },
  neu: {
    title: `Neumorphism Experiment | ${suffix}`,
    desc: 'A Neumorphism Experiment with Tailwind.css',
    url: '/neumorphism-experiment',
  },
  trivia: {
    title: `A Live Trivia Question Board | ${suffix}`,
    desc: 'A Live Trivia Question Board Built with Firestore and Google Sheets',
    url: '/trivia',
  },
  corona: {
    title: `2020, a depiction | ${suffix}`,
    desc: 'A summary of how I feel about 2020 and Covid-19',
    url: '/2020',
  },
  quickhub: {
    title: `QuickHub For GitHub, a Chrome Extension | ${suffix}`,
    desc: 'QuickHub for GitHub is a Chrome Extension which provides fast access to all your public and private repos, gists and notifications.',
    url: '/quickhub-for-github',
  },
  engage: {
    title: `Color Image Generation | ${suffix}`,
    desc: 'Color Image Generation Challenge',
    url: '/engage',
  },
};

export const domain = 'https://billsearle.me';
