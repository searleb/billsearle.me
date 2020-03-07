export const employment = {
  current: {
    title: 'the NBA.',
    link: 'https://nba.com',
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
  ],
};

export const projects = {
  professional: [
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
      tech: 'Tailwind.css / CSS',
    },
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
      date: 'March 2018 - June 2019',
      location: 'Southern Cross Austereo, Aus',
      title: 'Senior Front-End Web Developer',
    },
    {
      date: 'June 2017 - March 2018',
      location: 'Mentally Friendly Sydney, Aus',
      title: 'Senior Front-End Web Developer',
    },
    {
      date: 'November 2014 - June 2017',
      location: 'Mentally Friendly Sydney, Aus',
      title: 'Front-End Web Developer',
    },
    {
      date: 'August 2013 - Present',
      location: '👨🏻‍💻',
      title: 'Freelance Front-End Web Developer',
      gigs: [
        {
          title: 'Engine Digital',
          location: 'Vancouver, Can',
        },
        {
          title: 'Nightjar',
          location: 'Sydney, Aus',
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
    desc: `Bill Searle is a front end web developer, specialising in React.js development. Currently working remotely in Whistler for ${employment.current.title}`,
  },
  beroPrivacy: {
    title: `Bero App Privacy Policy | ${suffix}`,
    desc: 'Bero App Privacy Policy',
  },
  bero: {
    title: `Bero App | ${suffix}`,
    desc: 'Bero is the easiest, most direct navigator for iOS.',
  },
  contact: {
    title: `Contact | ${suffix}`,
    desc: 'Contact me if you\'d like to work together.',
  },
  error: {
    title: `404 | ${suffix}`,
    desc: 'Opps, we\'ve got lost!',
  },
  resume: {
    title: `Resume / CV | ${suffix}`,
    desc: 'Take a glance at my employment history.',
  },
  hubble: {
    title: `Hubble Talent | ${suffix}`,
    desc: 'Internal SCA Project - Hubble Talent Dashboard',
  },
  checkin: {
    title: `Check In | ${suffix}`,
    desc: 'Internal Mentally Friendly Project - Client Check-in and Dashboard',
  },
  six: {
    title: `Six Hundred Thousand Colour Schemes | ${suffix}`,
    desc: 'Six Hundred Thousand Contrast Safe Pantone Colour Schemes.',
  },
  nba: {
    title: `NBA All-Star Vote | ${suffix}`,
    desc: 'Send your favorite players to the NBA All-Star Game in Chicago.',
  },
  styleStudio: {
    title: `Schwarzkoft Style Studio | ${suffix}`,
    desc: 'Editorial style blog and marketing site for Schwarzkoft.',
  },
  neu: {
    title: `Neumorphism Experiment | ${suffix}`,
    desc: 'A Neumorphism Experiment with Tailwind.css',
  },
};

export default {
  employment,
  projects,
  resume,
  meta,
};
