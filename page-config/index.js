export const employment = {
  current: {
    title: 'Nightjar.',
    link: 'https://nightjar.co',
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
  ],
};

export const projects = {
  professional: [
    {
      title: 'PodcastOne Au',
      link: 'https://www.podcastone.com.au/',
      tech: 'React / Next.js / Styled Components / Node / Jest',
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
      link: 'http://style-studio.com.au/',
      tech: 'HTML / SCSS / jQuery / Angular / Laravel',
    },
    {
      title: 'Schwarzkopf Colour Match',
      link: 'https://style-studio.com.au/colour-match',
      tech: 'HTML / SCSS / jQuery / Laravel',
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
      link: '/bero',
      tech: 'React Native / Styled Components',
    },
    {
      title: 'Six Hundred Thousand Colour Schemes',
      link: '/six-hundred-thousand',
      tech: 'Node',
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
          title: 'Nightjar',
          location: 'Whistler, Can / Sydney, Aus',
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
    desc: `Bill is a front end developer, specialising in React.js development. Currently freelancing for ${employment.current.title}`,
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
};

export default {
  employment,
  projects,
  resume,
  meta,
};
