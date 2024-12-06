const PortfolioItems = {
  Featured: ['platinumAdvisors', 'blockBroker', 'inquizity'],
  Projects: {
    platinumAdvisors: {
      title: 'Platinum Advisors',
      excerpt:
        "Redesigned Platinum Advisors' website to more effectively communicate their professionalism and expertise to clients.",
      image: {
        path: '/images/',
        name: 'PlatinumAdvisorsThumbnail',
        extension: '.png',
        alt: "A screenshot of Platinum Advisors' homepage",
      },
      company: 'Nav Creative',
      url: 'https://www.platinumadvisors.com/',
      roles: ['Solo Designer'],
      years: '2023',
      technologies: ['Squarespace', 'Less', 'Javascript', 'HTML'],
      summary: `As the sole designer and developer from our studio, I led a website redesign for Platinum Advisors, a national advocacy firm looking to showcase their expanded reach. Working with two client representatives who represented key stakeholders, I managed the project from initial wireframes through custom development in Squarespace. 
        
        Despite challenges with an expanding scope and indirect stakeholder communication, I delivered a modern, premium design that effectively organized complex information and incorporated custom styling elements, including the Will Meyers Slideshow plugin and specialized portrait frames. The project concluded successfully with stakeholder approval, though it required careful budget management and rapid feedback coordination to meet deadlines.`,
      backgroundColor: '#282c34',
    },
    blockBroker: {
      title: 'Block Broker',
      excerpt:
        'Worked as solo frontend dev and team lead on this Web3 Hackathon project to democratize freelance contracting.',
      image: {
        path: '/images/',
        name: 'blockBrokerThumbnail',
        extension: '.jpg',
        alt: 'A screenshot of of the homepage of the Block Brokers frontend application',
      },
      company: 'MLH Web3 Hackathon',
      roles: ['Solo Designer'],
      years: '2023',
      technologies: ['React', 'CSS', 'Javascript'],
      github: 'https://github.com/Topupchips/MLH-Web3-Hackathon',
    },
    inquizity: {
      title: 'Inquizity',
      excerpt:
        'Product to save teachers time and give students a more efficient way of learning through AI quiz question generation.',
      image: {
        path: '/images/',
        name: 'inquizityThumbnail',
        extension: '.jpeg',
        alt: 'A visual representation of Inquizity the quiz generation app',
      },
      company: 'Test Company',
      roles: ['Developer', 'Designer'],
      years: '2023',
      technologies: ['React', 'Flask', 'Llama2'],
      github: 'https://github.com/hlalljie/QuizGeneratorFlaskReact',
    },
    'Test Project': {
      title: 'Test Project',
      excerpt:
        'This is a test project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, unsalad dayas arem ovem.',
      image: { path: 'https://picsum.photos/500/400' },
      company: 'Test Company',
      link: 'https://example.com',
      roles: ['Developer', 'Designer'],
      years: '2023',
      technologies: ['Python', 'Javascript'],
      github: 'https://github.com/Username/Repo',
    },
  },
};

export default PortfolioItems;
